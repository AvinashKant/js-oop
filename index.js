const fs = require('fs');
const path = require('path');


  function createFile(directory, filename) {
    const filePath = path.join(directory, filename);
    fs.writeFile(filePath, '', (err) => {
      if (err) {
        console.error('Error creating file:', err);
      } else {
        console.log('File created successfully:', filePath);
      }
    });
  }
  
  module.exports = createFile