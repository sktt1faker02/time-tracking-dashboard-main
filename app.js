const scheduleDetailsAnimation = document.querySelectorAll(".schedule-details");
scheduleDetailsAnimation.forEach((schedule) => {
  schedule.addEventListener("mouseover", (e) => {
    // e.style.marginTop = "0";
    // e.style.paddingBottom = "2.8rem";
    e.currentTarget.style.marginTop = "-1rem";
  });
});
