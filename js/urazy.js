'use strict';
var animate = function animate() {
    var elements = document.querySelectorAll('.presentation-item');
    var callback = function callback(i) {
        var elem = elements[i];
        var prev = elements[i - 1];
        if (prev)
            prev.classList.remove('presentation-item--active');
        if (!elem)
            return;
        elem.classList.add('presentation-item--active');
        return setTimeout(function () {
            return callback(++i);
        }, 3000);
    };
    callback(0);
};
document.querySelector('ul').addEventListener('click', animate, false);