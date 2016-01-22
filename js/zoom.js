'use strict';
document.getElementById('lupa').addEventListener('click', function (e) {
    return document.getElementById('obrazek').classList.toggle('img--zoomed');
}, false);