// Selecting Elements

const scheduleButtons = document.querySelectorAll("button");
const currentTime = document.querySelectorAll(".schedule-time");

// Display in Elements

const displayTime = function (time) {
  currentTime.forEach((timeEl) => {
    // console.log(timeEl, timeEl.nextElementSibling);
    console.log(timeEl);
  });
};

// Render Time
const renderTime = function (time) {
  scheduleButtons.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
      activateClickedButton(buttons);

      if (e.currentTarget.textContent === "Daily") {
        console.log(time);
        //  displayTime(time);
      }
      if (e.currentTarget.textContent === "Weekly") console.log(time.weekly);
      if (e.currentTarget.textContent === "Monthly") console.log(time.monthly);
    });
  });
};

// Get Data
const getTimeData = fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    return data;
    // data.map(({ title, timeframes } = time) => {
    //   // renderTime(timeframes);
    //   return timeframes;
    // });
  })
  .catch((error) => console.log(error));

const getTimeFrames = async () => {
  let timeFrameData;
  const timeFrame = await getTimeData;

  timeFrame.map(({ title, timeframes } = time) => {
    timeFrameData = Object.assign({}, timeframes);
  });

  console.log(timeFrameData);

  renderTime(timeFrameData);
};

getTimeFrames();

// Events

const activateClickedButton = (button) => {
  scheduleButtons.forEach((b) => b.classList.remove("active"));
  button.classList.add("active");
};

// scheduleButtons.forEach((buttons) => {
//   buttons.addEventListener("click", (e) => {
//     activateClickedButton(buttons);

//     if (e.currentTarget.textContent === "Daily") console.log("Daily");
//     if (e.currentTarget.textContent === "Weekly") console.log("Weekly");
//     if (e.currentTarget.textContent === "Monthly") console.log("Monthly");
//   });
// });

// currentTime.forEach((e) => console.log(e.textContent));
