// Selecting Elements

const scheduleButtons = document.querySelectorAll("button");
const currentTime = document.querySelectorAll(".schedule-time");

// Display in Elements

const displayTime = function (timedata) {
  currentTime.forEach((timeEl, i) => {
    timeEl.textContent = `${timedata[0][i]} hrs`;
    timeEl.nextElementSibling.textContent = `Last week - ${timedata[1][i]} hrs`;
  });
};

const getTime = function (time, type) {
  const timeData = [[], []];

  time.map((e, i) => {
    timeData[0].push(e[`${type}`].current);
    timeData[1].push(e[`${type}`].previous);
  });

  displayTime(timeData);
};

// Render Time
const renderTime = function (time) {
  scheduleButtons.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
      activateClickedButton(buttons);

      if (e.currentTarget.textContent === "Daily") getTime(time, "daily");
      if (e.currentTarget.textContent === "Weekly") getTime(time, "weekly");
      if (e.currentTarget.textContent === "Monthly") getTime(time, "monthly");
    });
  });
};

// Get Data

let timeFrameData = [];

const getTimeData = fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    return data;
  })
  .catch((error) => console.log(error));

const getTimeFrames = async () => {
  const timeFrame = await getTimeData;

  timeFrame.map(({ title, timeframes } = time) => {
    timeFrameData.push({ ...timeframes });
  });

  renderTime(timeFrameData);
  init(timeFrameData);
};

getTimeFrames();

// Events

const activateClickedButton = (button) => {
  scheduleButtons.forEach((b) => b.classList.remove("active"));
  button.classList.add("active");
};

// Init
const init = (data) => {
  //   renderTime(data);
  getTime(data, "weekly");
  document.getElementById("weekly").classList.add("active");
};

// Practice Async/Await

// const getApi = async function () {
//   const res = await fetch("./data.json");
//   const data = await res.json();
//   init(data);
// };
// getApi();
