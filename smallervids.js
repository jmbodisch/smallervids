setTimeout(function() {
    var metaBlocks = document.querySelectorAll("span.ytd-video-meta-block");
    var metaArray = Array.from(metaBlocks);

    console.log(metaArray.length);

    metaArray.forEach(function(block){
        if (block.innerHTML.search("views") != -1) {
            var compact = block.closest("ytd-compact-video-renderer");
            let item = block.closest("ytd-rich-item-renderer");
            if (compact != null) randomBgColor(compact);
            if (item != null) randomBgColor(item);
        };
    });

}, 3000);

function randomBgColor(element) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    element.style.backgroundColor = "#" + randomColor;
}