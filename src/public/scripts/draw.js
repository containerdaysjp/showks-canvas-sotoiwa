// This file is shared between server and client side.


(function(exports) {
    // Draw a line with color
    exports.line = function(context, x0, y0, x1, y1, color) {
        context.beginPath();
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.strokeStyle = color;
        context.lineWidth = 7;
        context.stroke();
        context.closePath();
    }
  
} (typeof exports === 'undefined' ? this.draw = {} : exports));
