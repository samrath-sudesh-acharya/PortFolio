const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", {y:"0%",duration:1, stagger: 0.25});
tl.to('.slider',{y:"-100%",duration:1.5,delay: 0.5});
tl.to(".start",{y:"-100%",duration:1},"-=1");
tl.fromTo('header', {opacity: 0},{opacity:1,duration:1});
tl.fromTo('.itext1', {opacity: 0},{opacity:1,duration:1}, '-=1');
tl.fromTo('#itext2', {opacity: 0},{opacity:1,duration:1}, '-=1');

