'use strict';

module.exports = rotate180;

/**
 * Performs a rotation of 180 degrees transform on bitmap
 * 
 * @param {Bitmap} bitmap
 * @returns {Buffer} buffer containing the modified version of the bitmap 
 */
function rotate180(bitmap) {
  if (bitmap.type === 'BM') {
    console.log('Rotating Bitmap...');

    for (let i = 0; i < (bitmap.buffer.length - bitmap.pixelArrayOffset)/2; i++) {
  
      let temp = bitmap.buffer[i + bitmap.pixelArrayOffset];
      bitmap.buffer[i + bitmap.pixelArrayOffset] = bitmap.buffer[bitmap.buffer.length - 1 - i];
      bitmap.buffer[bitmap.buffer.length - 1 - i] = temp;
  
    }
  } else {
    console.error('Incorrect file type. Please provide a bitmap file.');
  }
}