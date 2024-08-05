//write your code here
const prompt = require('prompt-sync')();
const { Chord, Scale, Key } = require("tonal");
const shuffle = require('shuffle-array');

const commandLineArguments = process.argv.slice(2, process.argv.length);

const [key, num_chords] = commandLineArguments;

// Checks for major/minor chord. Minor chords have different JSON structure.
function checkMajorMinor(str) { // True = Major | False = Minor
    if (str[1] === 'M' || str.length < 2) {
        return true;     
    }
    if (str[1] === 'm') {
        return false;
    }
}

// Searches for the given musical key in the Tonal library.
function searchKey(str) {
    let returnedKey = null;
    if (checkMajorMinor(str)) {
        // if chord is a major chord, call Tonal's get() method from Chord module.
        returnedKey = Key.majorKey(str[0]);
    } else {
        // if chord is minor, call the minorKey() method.
        returnedKey = Key.minorKey(str[0]);
    }
    return returnedKey;
}

// Search the Tonal library for the desired musical key. Returns a JSON object containing the key's info.
let finalKey = searchKey(key);

// Search the key's JSON object for the "Chords" array.
let chordArray = findChords(finalKey);

// Shuffle the order of chords in the array using shuffle-array package.
let shuffledChordArray = shuffle(chordArray, {'copy': true});

// Iterate through the chords array and return the desired number of chords.
let randomChordArray = returnRandomChords(shuffledChordArray, num_chords);

// Helper function to find the chords in the key's JSON object.
function findChords(inputKey) {
    let arr = null;
    if (inputKey.type === 'major') {
        arr = inputKey.chords;
    }
    if (inputKey.type === 'minor') {
        arr = inputKey.natural.chords;
    }
    return arr;
}

// Take the shuffled chord array as input and slices the array to include the specified number of chords.
function returnRandomChords(arr, num) {
    numToPrint = 0;
    if (num > 7) {
        numToPrint = 4;
    } else {
        numToPrint = num;
    }
    let subArray = arr.slice(0, numToPrint);
    return subArray;
}

// Takes a chord symbol string as input and searches the Tonal library for that chord's JSON object. Prints the chord's name and notes.
function printChord(chord) {
    let chordDetails = Chord.get(chord);
    console.log(`Chord name: ${chordDetails.name}\nNotes: ${JSON.stringify(chordDetails.notes)}`);
}

console.log(`Key: ${finalKey.tonic} ${finalKey.type}\nChords: ${randomChordArray}\n`);
for (let i = 0; i < num_chords; i++) {
    console.log(printChord(randomChordArray[i]));
}