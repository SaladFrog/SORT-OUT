var mapLimit = require('map-limit');
var newArray = require('new-array');

var steps = 900;
var part = 900;
var interval = 0.0001;

var time = 0;
frame=0;

var array = newArray(steps).map((x, i) => i);
var particles = newArray(part).map((x, i) => i);

function delay() {
  return new Promise(resolve => setTimeout(resolve, 300));
}

async function delayedLog(item) {
  // notice that we can await a function
  // that returns a promise
  await delay();

  console.log('itemNr:', item);
  
  time += interval
  particles.forEach((p, i)=>{
    console.log(p);
  })
}
async function processArray(array) {
  // map array to promises
  const promises = array.map(delayedLog);
  // wait until all promises are resolved
  await Promise.all(promises);
  console.log('Done!');
}

processArray(array);
console.log(array);
