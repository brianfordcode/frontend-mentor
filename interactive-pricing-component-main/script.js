const rangeSlider = document.getElementById("slider");
const discountCheckbox = document.getElementById("checkbox");

rangeSlider.oninput = function () {
  renderScreen();
};

//PAGEVIEWS//
function convertSliderValueToPageViews(sliderValue) {
  if (sliderValue === 1) {
    return "10k";
  } else if (sliderValue === 2) {
    return "50k";
  } else if (sliderValue === 3) {
    return "100k";
  } else if (sliderValue === 4) {
    return "500k";
  } else if (sliderValue === 5) {
    return "1M";
  }
}

function setPageViews(value) {
  const numPageViews = document.getElementById("num-page-views");
  numPageViews.innerHTML = convertSliderValueToPageViews(parseInt(value));
}

//COST//

function convertSliderValueToCost(sliderValue) {
  if (sliderValue === 1) {
    return 8;
  } else if (sliderValue === 2) {
    return 12;
  } else if (sliderValue === 3) {
    return 16;
  } else if (sliderValue === 4) {
    return 24;
  } else if (sliderValue === 5) {
    return 36;
  }
}

function setCost(value) {
  const money = document.getElementById("money");
  if (discountCheckbox.checked) {
    money.innerHTML = convertSliderValueToCost(parseInt(value)) * 0.75;
  } else {
    money.innerHTML = convertSliderValueToCost(parseInt(value));
  }
}

//MONTHLY BILLING//

const monthlyCheckbox = document.getElementById("checkbox");

function renderScreen() {
  setPageViews(rangeSlider.value);
  setCost(rangeSlider.value);
}

monthlyCheckbox.oninput = function () {
  renderScreen();
};