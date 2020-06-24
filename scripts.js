function moveArrows(){
  var tl = new TimelineMax();
  var time = 0.48;
  var delay = 0.72;
  var easingCurve = "ease: Sine.easeOut";

  tl.addLabel("animateArrow")
    .to(".arrowRight", time, { opacity: 1 }, "animateArrow")
    .to(".arrowRight", time, { opacity: 1, x: 35, easingCurve }, "animateArrow")
    .to(".arrowRight", 0.24, { opacity: 0 }, delay, "animateArrow")

    .to(".arrowLeft", time, { opacity: 1 }, "animateArrow")
    .to(".arrowLeft", time, { opacity: 1, x: -30, easingCurve  }, "animateArrow")
    .to(".arrowLeft", 0.24, { opacity: 0 }, delay, "animateArrow")

    .to(".arrowDown", time, { opacity: 1 }, "animateArrow")
    .to(".arrowDown", time, { opacity: 1, y: 25, easingCurve }, "animateArrow")
    .to(".arrowDown", 0.24, { opacity: 0 }, delay, "animateArrow")
    .repeat(-1);

  return tl;

}

var master = new TimelineMax();
  master.add(moveArrows());