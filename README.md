# Chord Generator Application

## Overview
The Chord Generator Application is a Node.js-based tool designed to generate a random set of chords in a given key. This application is useful for musicians, composers, and music enthusiasts who want to explore different chord progressions and enhance their musical creativity.

## Features
- **Generate Random Chords:** The application generates a random set of chords based on the specified key and number of chords.
- **Chord Types:** Supports various chord types including major, minor, diminished, augmented, and seventh chords.
- **Scale Degree Compliance:** Ensures that the generated chords are within the scale degree of the given key.

## Libraries Used

### Core Libraries
- **prompt-sync:** A synchronous prompt for Node.js that allows for user input from the command line.
- **tonal:** A comprehensive music theory library for JavaScript that provides utilities for working with scales, chords, and notes.

### Utility Libraries
- **shuffle-array:** A library to shuffle the order of elements in an array, used to randomize the chord selection.

## Installation

1. Clone the Repository:
    ```bash
    git clone https://github.com/salvadorfrs5/chord-generator.git
    cd chord-generator
    ```
2. Install Dependencies:
    ```bash
    npm install
    ```

## Usage

1. Run the Application:
    ```bash
    node app.js
    ```
2. Follow the Prompts:
    - Enter the key (e.g., C, G, Dm).
    - Enter the number of chords to generate as **command line arguments**.
3. View the Output:
    - The application will display the generated chords, chord name and characteristics, and chord notes.

## Code Structure

### Main Logic
The main logic of the application is contained in `app.js`. It includes the following key functions:
- **findChords:** Searches the key's JSON object for the "Chords" array.
- **shuffle:** Shuffles the order of chords in the array using the `shuffle-array` package.
- **returnRandomChords:** Iterates through the shuffled chords array and returns the desired number of chords.

### Example Code Snippet

```javascript
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
        arr = inputKey.chords;
        // Additional logic for minor keys
    }
    return arr;
}
```
