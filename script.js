const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

var main = document.querySelector(".main")
var crsr = document.querySelector(".circle")

main.addEventListener("mousemove", function(point){
    crsr.style.left = point.x + "px"
    crsr.style.top = point.y + "px"
})

function firstPageAnimation(){
    var tl = gsap.timeline();

    tl.from("nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y: '0',
        duration: 1.5,
        ease: Expo.easeInOut,
        stagger: .2,
        delay: -1
    })
}

firstPageAnimation();

document.querySelectorAll(".elem").forEach(function(elem){
        var rotate = 0;
        var diffrot = 0;

        elem.addEventListener("mouseleave", function(dets){
            gsap.to(elem.querySelector("img"), {
                opacity: 0,
                ease: Power3,
            });
        });

        elem.addEventListener("mousemove", function(dets){
            var diff = dets.clientY - elem.getBoundingClientRect().top;
            diffrot = dets.clientX - rotate;
            rotate = dets.clientX;
            gsap.to(elem.querySelector("img"), {
                opacity: 1,
                ease: Power3,
                top: diff,
                left: dets.clientX,
                rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5)
            });
        });
    });