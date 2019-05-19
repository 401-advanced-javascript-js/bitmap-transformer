'use strict';

module.exports = greyscale;

/**
 * Performs greyscale transform on bitmap
 * 
 * @param {Bitmap} bitmap
 * @returns {Buffer} buffer containing the modified version of the bitmap 
 */
function greyscale(bitmap) {
  console.log('Greyscaling Bitmap...');
  
  for (let i = bitmap.pixelArrayOffset; i < bitmap.buffer.length - 5; i += 4) {
    bitmap.buffer[i] = 0;
    bitmap.buffer[i+1] = 0;
    bitmap.buffer[i+2] = 0;
    bitmap.buffer[i+3] = 0;
  }

  // TODO: Figure out a way to validate that the bitmap instance is actually valid before trying to transform

  // TODO: alter bitmap to make the image greyscale

}