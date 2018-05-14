document.body.style.backgroundColor = "#FF00FF";
//var clip = window.clipboardData.getData("Text")

document.addEventListener('paste', function (event) {
    var clipText = event.clipboardData.getData('Text');
    alert('pasting:' + clipText)
});

