// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs');
const path = require('path');
 
const dataPath = path.resolve(__dirname, 'notes.txt')
console.log(dataPath)

const data = fs.readFileSync('./filesystem/notes.txt', 'UTF-8');
console.log(data);