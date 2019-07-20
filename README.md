# LAB - 05

## Bitmap Transformer

### Author: Jagdeep Singh

### Links and Resources
* [submission PR](https://github.com/401-advanced-javascript-js/bitmap-transformer/pull/1)
* [travis](https://www.travis-ci.com/401-advanced-javascript-js/bitmap-transformer)

### Modules

#### `bitmap.js`
##### Exported Values and Methods

###### `Bitmap(file path) -> new Bitmap instance`
Usage Notes or examples

###### `bitmap.parse(buffer) -> no return`
Parses buffer for .bmp file and sets object properties for each segment of the file

###### `bitmap.transform(transform type) -> no return`
Applies transform to bitmap object

#### `sunburn.js`
##### Exported Values and Methods

###### `sunburn(bitmap) -> error or undefined`
Applies sunburn to bitmap

#### `rotate180.js`
##### Exported Values and Methods

###### `rotate180(bitmap) -> error or undefined`
Rotates bitmap by 180 degrees

#### Running the app
* `npm start [filename] [transformation name]`
  
#### Tests
* How do you run tests?

  `npm test`
