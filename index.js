'use strict';

const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const Bitmap = require('./lib/bitmap.js');

// filepath and transforms to perform
const [file, transform] = process.argv.slice(2);
performTransform(file, transform);

/**
 * Performs transforms on file
 *
 * @param {string} file, file path for original BMP
 * @param  {...string} transforms transformations to perform
 */
function performTransform(file, transform) {
  if (!file || !transform) {
    console.error('Error, missing required arguments. Please provide a BMP file and transform to apply.');
    return;
  }
  readFileAsync(file)
    .then((buffer) => {
      let bitmap = new Bitmap(file);
      bitmap.parse(buffer);

      if (bitmap.type !== 'BM') {
        console.error('Sorry, this file format is not supported.');
        return;
      }

      // file buffer with transform applied
      let transformPerformed = bitmap.transform(transform);
      if (transformPerformed) {
        let updatedFilename = bitmap.filePath.replace(/\.bmp/, `.${transform}.bmp`);

        return writeFileAsync(updatedFilename, bitmap.buffer)
          .then(() => {
            console.log(`Transformed bitmap created in '${updatedFilename}'`);
          })
          .catch(() => {});
      }
    })
    .catch((err) => {
      console.error('Error performing transformation. \n');
      throw err;
    });
}
