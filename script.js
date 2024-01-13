var crsr= document.querySelector("#cursor")
var blur= document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
        crsr.style.left= dets.x+"px"
        crsr.style.top= dets.y+"px"
        blur.style.left= dets.x-200+"px"
        blur.style.top= dets.y-200+"px"
})

var h4all= document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2.5
        crsr.style.border= "0.5px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border= "0px solid #ff0dae"
        crsr.style.backgroundColor="#ff0dae"
    })
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"100px",
    duration:0.8,
    
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:"2"
    }

})

gsap.from("#about-us img, #about-us-in",{
    y:70,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2

    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0.5,
    duration:1,
    stagger:0.02,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2

    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end:"top 45%",
        scrub:2
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end:"top 45%",
        scrub:2
    }
})

gsap.from("#page4 h1",{
    y:50,
     scrollTrigger:{
        trigger:"#page4 h1", 
        scroller:"body", 
        // markers:true,
        start:"top 82%", 
        end:"top 45%", 
        scrub:1
    }
})