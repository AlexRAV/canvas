document.addEventListener('DOMContentLoaded', function () {
    var canv = document.createElement('canvas');
    var ctx = canv.getContext('2d');
    canv.width = window.innerWidth;
    canv.height = window.innerHeight;
    console.log(document.body);
    document.body.appendChild(canv);

    var i = 0;

    function main() {
        ctx.clearRect(0, 0, canv.width, canv.height);

        if (i==360) i=0;

        ctx.strokeWidth = 1;

        for (var j = 1; j<=11; j++) {
            ctx.beginPath();
            ctx.moveTo(20, (j * 20) + Math.sin(i));
            ctx.quadraticCurveTo(120, (j * 20) + Math.cos(i),220,(j * 20) - Math.sin(i));
            ctx.stroke();
        }
        i+=0.1;
        requestAnimationFrame(main);
    }
    requestAnimationFrame(main);
})