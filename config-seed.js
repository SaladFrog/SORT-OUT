var seedRandom = require('seed-random');
var palettes = require('./color-palettes.json');

var foo = function () {
  if (typeof seed === 'undefined') {
    // seed = String(Math.floor(Math.random() * 1000000));
    seed = '452090';
  }

  console.log('Seed:', seed);

  var randomFunc = seedRandom(seed);
  var random = createRandomRange(randomFunc);
  console.log('Random Function:', randomFunc());
  console.log('Random:', random());

  var maps = [
    'sym6.jpg', 'sym3.jpg',
    'scifi.jpg', 'nature1.jpg',
    'map7.jpg', 'geo5.jpg', 'geo4.jpg',
    'geo3.jpg', 'geo1.jpg', 'fractal2.jpg',
    'fractal1.jpg', 'eye.jpg', 'city5.jpg',
    'city2.jpg', 'church2.jpg', 'architecture.jpg',
    'pat1.jpg'
  ].map(function (p) {
    return 'maps/' + p;
  });

  var mapSrc = maps[Math.floor(random(maps.length))];
  // console.log('Picked map:', mapSrc);

  console.log('random:', randomFunc());
  console.log('pointilism:', random(0, 0.1));
  console.log('noiseScalar:', [ random(0.000001, 0.000001), random(0.0002, 0.004) ]);
  console.log('globalAlpha:', 0.5);
  console.log('startArea:', random(0.0, 1.5));
  console.log('maxRadius:', random(5, 100));
  console.log('lineStyle:', random(1) > 0.5 ? 'round' : 'square');
  console.log('interval:', random(0.001, 0.01));
  console.log('count:', Math.floor(random(50, 2000)));
  console.log('steps:',Math.floor(random(100, 1000)));
  console.log('endlessBrowser:', false);
    console.log('');
  console.log('debugLuma', false);
  console.log('backgroundScale', 1);
  console.log('backgroundFille', 'black');
  console.log('backgroundSrc', mapSrc);
    console.log('');
  console.log('pixelRatio', 1);
  console.log('width', 1280 * 2);
  console.log('height', 720 * 2);
  console.log('palette', getPalette());
    console.log('');
  console.log('asVideoFrames', false);
  console.log('filename', 'render');
  console.log('outputDir', 'output');

  
  function getPalette () {
    var paletteColors = palettes[Math.floor(random() * palettes.length)];
    return arrayShuffle(paletteColors);
  }
  function arrayShuffle (arr) {
    var rand;
    var tmp;
    var len = arr.length;
    var ret = arr.slice();

    while (len) {
      rand = Math.floor(random(1) * len--);
      tmp = ret[len];
      ret[len] = ret[rand];
      ret[rand] = tmp;
    }

    return ret;
  }
};
var bar = foo();

function createRandomRange(randFunc) {
  return function random (min, max) {
    if (typeof min === 'undefined') {
      min = 1;
    }
    if (typeof max === 'undefined') {
      max = min;
      min = 0;
    }
    return randFunc() * (max - min) + min;
  };
};
