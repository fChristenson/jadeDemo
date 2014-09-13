function getRect (id) {
    return document.getElementById(id).getBoundingClientRect();
}

function getMidpoint (rect) {
    return rect.left + (rect.width / 2);
}

var passedHello,
    passedWorld,
    passedDots,
    helloRect = getRect('hello'),
    worldRect = getRect('world'),
    dotsRect = getRect('dots'),
    idArray = ['#hello', '#world', '#dots'];

setInterval(function () {
    var ballRect = getRect('ball');

    if (!passedHello && ballRect.left > getMidpoint(helloRect)) {
        passedHello = true;
        $(idArray[0]).animate({opacity: 0}, 2000);
    }

    if (!passedWorld && ballRect.left > getMidpoint(worldRect)) {
        passedWorld = true;
       $(idArray[1]).animate({opacity: 0}, 2000);
    }

    if (!passedDots && ballRect.left > getMidpoint(dotsRect)) {
        passedDots = true;
       $(idArray[2]).animate({opacity: 0}, 2000);
    }

    if (passedHello && passedWorld && passedDots && ballRect.left < getMidpoint(helloRect)) {
        passedHello = false;
        passedWorld = false;
        passedDots = false;

        for(var id in idArray) {
            $(idArray[id]).css('opacity', '1');
        }
    }
}, 500);