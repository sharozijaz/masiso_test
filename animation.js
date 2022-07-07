var tl = gsap.timeline();

tl.from(".animate__hero", { duration: 2, x: 200, ease: "power4.out" });

gsap.from(".left", {
  duration: 1,
  x: -300,
  ease: "power1.out",
  stagger: 0.25,
});
gsap.from(".right", {
  duration: 1,
  x: 300,
  ease: "power1.out",
  stagger: 0.25,
});
