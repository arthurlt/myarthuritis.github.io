// Initialization and events code for the app
(function () {
    "use strict";

    // preparing the elements we'll need further
    var snowflakesCanvas = document.getElementById("snowflakesCanvas");
    var snowflakesContext = document.getElementById("snowflakesCanvas").getContext("2d");
    var backgroundGradientCanvas = document.getElementById("backgroundGradient");
    var backgroundGradientContext = backgroundGradientCanvas.getContext("2d");

    function resizeCanvasElements() {
        // update internal contraints for the postcard and snowflakes container
        Snowflakes.updateBounds();
        // resize falling snowflakes canvas to fit the screen
        snowflakesCanvas.width = window.innerWidth;
        snowflakesCanvas.height = window.innerHeight;
    }

    document.addEventListener("DOMContentLoaded", function () {

        Snowflakes.generate(parseInt(100));

        // genarate snowflakes
        Snowflakes.generate();

        // properly resize the canvases
        resizeCanvasElements();

        // initialize out animation functions and start animation:
        // falling snowflakes
        Animation.addFrameRenderer(Snowflakes.render, snowflakesContext);
        // start the animation
        Animation.start();

    });

    window.addEventListener("resize", function () {
        // properly resize the canvases
        resizeCanvasElements();
    });

})();