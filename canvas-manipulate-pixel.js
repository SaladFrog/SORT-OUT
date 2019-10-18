 ctx.fillStyle = opt.fillStyle || 'black';
 ctx.fillRect(0, 0, canvas.width, canvas.height);

// TODO: make as CSS background-size: cover;
var hRatio = canvas.width / backgroundImage.width;
var vRatio = canvas.height / backgroundImage.height;
var ratio = Math.min(hRatio, vRatio);
  
ctx.drawImage(backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height, 0, 0, backgroundImage.width * ratio, backgroundImage.height * ratio);
// END TODO

var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
var data = imageData.data;

for (var i = 0; i < canvas.width * canvas.height; i++) {
  data[i * 4 + 0];
  data[i * 4 + 1];
  data[i * 4 + 2];
}
ctx.putImageData(imageData, 0, 0);

console.log('imageData', imageData);
console.log('imageData-DATA', data);
