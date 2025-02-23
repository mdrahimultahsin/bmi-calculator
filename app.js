const height = document.getElementById("height");
const weight = document.getElementById("weight");

const btn = document.getElementById("btn");
const guideline = document.getElementById("guideline");
const scoreArea = document.getElementById("score-area");
const score = document.getElementById("score");
// Click Event Handling
btn.addEventListener("click", function () {
  let heightValue = parseFloat(height.value * 0.0254);
  const heightSqr = parseFloat(heightValue * heightValue);
  let weightValue = weight.value;
  const result = weightValue / heightSqr;
  score.innerText = result.toFixed(2);
  guideline.style.display ='block'
  if (result < 18.5) {
    scoreArea.style.background = "#FFDF20";
    scoreArea.style.color = "black";
  } else if (result < 24.9) {
    scoreArea.style.background = "#00C951";
    scoreArea.style.color = "white";
  } else {
    scoreArea.style.background = "#FB2C36";
    scoreArea.style.color = "white";
  }
});

// Clear
document.getElementById("clear-btn").addEventListener("click", function () {
  height.value = "";
  weight.value = "";
});
