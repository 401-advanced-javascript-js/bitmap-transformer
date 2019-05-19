'use strict';

const greyscale = require('./transforms/greyscale.js');
const invert = require('./transforms/invert.js');

class Bitmap {
  /**
   * Bitmap -- receives a file name, used in the transformer to note the new buffer
   * @param {String} filePath
   */
  constructor(filePath) {
    this.filePath = filePath;

    /**
     * A dictionary of transformations
     * Each property represents a transformation that someone could enter on the command line and then a function that would be called on the bitmap to do this job
     */
    this.transforms = {
      greyscale: greyscale,
      invert: invert,
    };
  }

  /**
   * Parser -- accepts a buffer and will parse through it, according to the specification, creating object properties for each segment of the file
   * 
   * @param {Buffer} buffer
   */
  parse(buffer) {
    const FILE_SIZE_OFFSET = 2;
    const WIDTH_OFFSET =  18;
    const HEIGHT_OFFSET = 22;
    const BITS_PER_PIXEL_OFFSET = 28;
    // const COLOR_TABLE_OFFSET = 54;

    this.buffer = buffer;
    this.type = buffer.toString('ascii', 0, 2);

    this.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
    this.width = buffer.readInt16LE(WIDTH_OFFSET);
    this.height = buffer.readInt16LE(HEIGHT_OFFSET);
    this.bitsPerPixel = buffer.readInt16LE(BITS_PER_PIXEL_OFFSET);

    this.pixelArrayOffset = buffer.readInt32LE(10);

    // this.pixelArray = buffer.slice(pixelArrayOffset);
    // this.colorTable = buffer.readInt32LE(COLOR_TABLE_OFFSET, pixelArrayOffset);
  }

  /**
   * Transforms Bitmap instance with passed in type of transform,
   * and creates a new file called [file name].[transform type].bmp
   * 
   * @param {string} transformType 
   */
  transform(transformType) {
    // check if transform exists else send error out
    if (this.transforms[transformType]) {
      this.transforms[transformType](this);
      return true;
    }
    console.error(`Sorry ${transformType} transform is unavailable.`);
    return false;
  }
}

module.exports = Bitmap;