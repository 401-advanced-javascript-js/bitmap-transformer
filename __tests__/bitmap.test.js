'use strict';

const Bitmap = require('../lib/bitmap.js');
const fs = require('fs');
// jest.mock('../lib/bitmap.js');

describe('Bitmap object', () => {
 
  it('constructor called', () => {
    let bmp = new Bitmap('filepath');

    expect(bmp.filePath).toEqual('filepath');
  });
});

describe('parse function of Bitmap', () => {
  it('sets property values correctly', () => {
    // TODO: read file in and parse buffer

    fs.readFile('./assets/baldy.bmp', (err, data) => {
      let bmp = new Bitmap('../assets/baldy.bmp');

      bmp.parse(data);

      expect(bmp.buffer).toBeDefined();
      expect(bmp.type).toEqual('BM');

      expect(bmp.fileSize).toBeGreaterThan(0);
      expect(bmp.width).toBeDefined();
      expect(bmp.height).toBeGreaterThan(0);
      expect(bmp.bitsPerPixel).toBeGreaterThan(0);
      expect(bmp.pixelArrayOffset).toBeGreaterThan(0);
    });
  });
});

describe('transform function of Bitmap', () => {
  let bmp = new Bitmap('../assets/baldy.bmp');
  bmp.type = 'BM';
  bmp.buffer = new Array(100);

  it('returns true if transform exists', () => {
    expect(bmp.transform(Object.keys(bmp.transforms)[0])).toBeTruthy();
  });

  it('returns false if transform doesn\'t exist', () => {
    expect(bmp.transform()).toBeFalsy();
  });
});