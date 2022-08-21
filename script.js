$(document).ready(function () {

    var element = $("#html-content-holder");
    var getCanvas;

    $("#download-btn").on('click', function () {
        html2canvas(element, {
            onrendered: function (canvas) {
                getCanvas = canvas;
                var imgageData = getCanvas.toDataURL("image/png");
                var a = document.createElement("a");
                a.href = imgageData; //Image Base64 Goes here
                a.download = "image.png"; //File name Here
                a.click(); //Downloaded file
            }
        });
    });
});