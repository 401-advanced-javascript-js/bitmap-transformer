'use strict';

module.exports = sunburn;

/**
 * Performs sunburn transform on bitmap
 * 
 * @param {Bitmap} bitmap
 * @returns {Buffer} buffer containing the modified version of the bitmap 
 */
function sunburn(bitmap) {
  if (!bitmap || bitmap.type !== 'BM') {
    console.error('Invalid parameters for sunburn transform, please provide a bitmap of type BM.');
    return false;
  }

  const sunburn = {
    blue: 200,
    green: 200,
    red: 200,
    zero: 200,
  };

  console.log('Tanning Bitmap...');

  for (let i = bitmap.pixelArrayOffset; i < bitmap.buffer.length - 4; i += 4) {
  
    let blue = bitmap.buffer[i];
    let green = bitmap.buffer[i+1];
    let red = bitmap.buffer[i+2];
    
    if (red >= 200 && red <= 244 && 
        green >= 200 && green <= 244 &&
        blue >= 200 && blue <= 244) {

      // Blue
      bitmap.buffer[i] = sunburn.blue;
      // Green
      bitmap.buffer[i+1] = sunburn.green;
      // Red
      bitmap.buffer[i+2] = sunburn.red;
      // Zero
      bitmap.buffer[i+3] = sunburn.zero;
    }
  }
  return true;
}