// ES6



let speed = 300;
let amount = 30;

let yOffset = 20;
let smooth = 0;
let diff = 0;

let t = null;
let oldTime = null;
let delta = 0;

let ticking = false;

//
function doSomethingX(scroll_pos) {
    // Do something with the scroll position
}

//
window.addEventListener('scroll', function(e) {
    // last_known_scroll_position = window.scrollY;
    yOffset = window.pageYOffset;

   // if (!ticking) {
   // window.requestAnimationFrame(function() {
        // doSomething(yOffset);
   //     ticking = false;
   //  });

   //  ticking = true;
   // }
});

    // console.log('TIME T: ', t);

const animate = t => {
    if (oldTime)
    delta = t - oldTime;

    smooth += (yOffset - smooth) * delta / speed;
    diff = yOffset - smooth;

    let translateCenter = diff * -2 / amount;
    let translateRed = diff * 3 / amount;
    let translateGreen = diff * 2 / amount;
    let translateBlue = diff * 1 / amount;

    /*
    var center = document.querySelectorAll('.center');
    var r = document.querySelectorAll('.r');
    var g = document.querySelectorAll('.g');
    var b = document.querySelectorAll('.b');
    */

    document.querySelectorAll('.center').forEach(function(tag) {
        // Now do something with my button
        tag.style.transform = 'translateY(' + translateCenter + 'px)';
    });

    document.querySelectorAll('.r').forEach(function(r) {
        // Now do something with my button
        r.style.transform = 'translateY(' + translateRed + 'px)';
    });

    document.querySelectorAll('.g').forEach(function(g) {
        // Now do something with my button
        g.style.transform = 'translateY(' + translateGreen + 'px)';
    });

    document.querySelectorAll('.b').forEach(function(b) {
        // Now do something with my button
        b.style.transform = 'translateY(' + translateBlue + 'px)';
    });

    oldTime = t;

    requestAnimationFrame(animate);
};

requestAnimationFrame(animate);
