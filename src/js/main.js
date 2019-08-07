window.onload = function () {
    var img = new Image();
    img.src = 'assets/banner-dynamic.png';

//We can call an ajax here to load the image from the backend and set that to img.src thus the banner image can change dynamically in future


    img.onload = function () {
        // CREATE CANVAS CONTEXT.
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);  // DRAW THE IMAGE TO THE CANVAS.
    }
}
