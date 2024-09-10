var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x -10+ "px";
    crsr.style.top = dets.y-10+"px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 +"px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border =  "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border =  "0px solid #38B6FF"
        crsr.style.backgroundColor = "#38B6FF"
    })
})


gsap.to("#nav",{
    backgroundColor: "#000",
    // duration: 5,
    height: "110px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
});

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -60%",
        scrub: 2,
    }
})


gsap.from("#about-us img, #about-us-in", {
    y:100,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end:"top 65%",
        scrub: 3,
    }
})

gsap.from("#card1",{
    x:-50,
    opacity:0,
    scrollTrigger:{
        trigger: "#card1",
        scroller: "body",
        start: "top 60%",
        end:"top 55%",
        scrub: 2,
        // markers: true,
    }
})

gsap.from("#card2",{
    y:50,
    opacity:0,
    scrollTrigger:{
        trigger: "#card2",
        scroller: "body",
        start: "top 60%",
        end:"top 55%",
        scrub: 2,
        // markers: true,

    }
})

gsap.from("#card3",{
    x:50,
    opacity:0,
    scrollTrigger:{
        trigger: "#card3",
        scroller: "body",
        start: "top 60%",
        end:"top 55%",
        scrub: 2,
        // markers: true,

    }
})