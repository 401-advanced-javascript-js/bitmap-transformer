'use strict';

const Bitmap = require('../lib/bitmap.js');
const rotate180 = require('../lib/transforms/rotate180.js');

let log, error;

describe('Rotation Transformation', () => {

  // Before each test runs, turn the spy for console "on"
  beforeEach(() => {
    log = jest.spyOn(global.console, 'log').mockImplementation(() => {});
    error = jest.spyOn(global.console, 'error').mockImplementation(() => {});
  });

  // Afer each test completes, clear out the spies. Otheriwse, you'll get false positives
  // as the spies will remember what they saw in previous tests. This gets you a clean start.
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('TypeError thrown when parameter missing', () => {
    expect(rotate180()).toBeFalsy();
    expect(error).toHaveBeenCalledWith('Invalid parameters for rotate180 transform, please provide a bitmap of type BM.');
  });

  it('Transformation performed when given Bitmap object of BM type', () => {
    let bmp = new Bitmap('filepath');
    bmp.type = 'BM';
    bmp.buffer = new Array(100);

    expect(rotate180(bmp)).toBeTruthy();
    expect(log).toHaveBeenCalledWith('Rotating Bitmap...');
  });
});