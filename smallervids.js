setTimeout(function() {
    Array.from(document.getElementsByTagName("ytd-compact-video-renderer")).forEach(element => {
        randomBgColor(element);
    });

    Array.from(document.getElementsByTagName("ytd-rich-item-renderer")).forEach(element => {
        randomBgColor(element);
    });
}, 3000);

function randomBgColor(element) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    element.style.backgroundColor = "#" + randomColor;
}