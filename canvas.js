var x; //drawing context
var width;
var height;
var fg;
var buffer

window.onload = function() {
    var drawingCanvas = document.getElementById('myDrawing');
    // Check the element is in the DOM and the browser supports canvas
    if(drawingCanvas && drawingCanvas.getContext) {
        // Initaliase a 2-dimensional drawing context
        x = drawingCanvas.getContext('2d');
        
        width = x.canvas.width;
        height = x.canvas.height;
fg = new Image();
        fg.src = 'https://via.placeholder.com/500';

        // create offscreen buffer, 
        buffer = document.createElement('canvas');
        buffer.width = fg.width;
        buffer.height = fg.height;
        bx = buffer.getContext('2d');

        // fill offscreen buffer with the tint color
        bx.fillStyle = 'blue'
        bx.fillRect(0,0,buffer.width,buffer.height);

        // destination atop makes a result with an alpha channel identical to fg, but with all pixels retaining their original color *as far as I can tell*
        bx.globalCompositeOperation = "destination-atop";
        bx.drawImage(fg,0,0);


        // to tint the image, draw it first
        x.drawImage(fg,0,0);

        //then set the global alpha to the amound that you want to tint it, and draw the buffer directly on top of it.
        x.globalAlpha = 0.5;
        x.drawImage(buffer,0,0);
        
        // grey box grid for transparency testing
        x.fillStyle = 'red';
        x.fillRect(0,0,width,height);
        x.fillStyle = 'blue';
        var i,j;
        for (i=0; i<100; i++){
            for (j=0; j<100; j++){
                if ((i+j)%2==0){
                    x.fillRect(20*i,20*j,20,20);
                }
            }
        }

        
    }
}
