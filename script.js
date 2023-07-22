var tl = gsap.timeline();

tl.from("#nav",{
    opacity:0,
    delay:0.3,
})
tl.from("#nav h1,#page1 #nav .right-btn .sign-up,#page1 #nav .right-btn .gol-i ,#nav h3",{
    y:-80,
    opacity:0,
    duration:0.7,
    stagger:0.3
})
tl.from("#left",{
    opacity:0,
    delay:0.3,
})
tl.from("#left h1,#left #span1,#left #span2,#left #span3",{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:0.5,
    
})
tl.from("#right video",{
    scale:0,
    opacity:0,
    duration:0.5
})

tl.from(".line-bottom",{
    scale:0.5,
    opacity:0,
})
tl.from(".page1-bottom .bottom-left .left-svg,.btn-parent",{
    opacity:0,
})
tl.from(".bottom-right",{
    // scale:1.3,
    // x:800,
    scale:1.2,
    opacity:0,
    duration:0.5
})




gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        // markers:true,
        start:"top 70% "
    }
})

