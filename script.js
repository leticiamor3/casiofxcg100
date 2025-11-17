document.addEventListener("DOMContentLoaded", function () {
  var stepsList = document.getElementById("simSteps");
  var screenEl = document.getElementById("simScreen");
  var stepNumberEl = document.getElementById("simStepNumber");
  var stepTotalEl = document.getElementById("simStepTotal");
  var prevBtn = document.getElementById("simPrev");
  var nextBtn = document.getElementById("simNext");

  if (!stepsList || !screenEl || !stepNumberEl || !stepTotalEl || !prevBtn || !nextBtn) {
    return;
  }

  var items = stepsList.querySelectorAll("li");
  if (!items.length) return;

  var screens = [];
  for (var i = 0; i < items.length; i++) {
    var scr = items[i].getAttribute("data-screen");
    if (!scr || scr.trim() === "") scr = items[i].textContent.trim();
    screens.push(scr);
  }

  var current = 0;
  stepTotalEl.textContent = screens.length.toString();

  function render() {
    screenEl.textContent = screens[current];
    stepNumberEl.textContent = (current + 1).toString();
  }

  prevBtn.addEventListener("click", function () {
    if (current > 0) {
      current--;
      render();
    }
  });

  nextBtn.addEventListener("click", function () {
    if (current < screens.length - 1) {
      current++;
      render();
    }
  });

  render();
});
