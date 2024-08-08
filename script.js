import numTeams from "./solutions/numTeams.js";
import minimumDeletions from "./solutions/minimumDeletions.js";
import minHeightShelves from "./solutions/minHeightShelves.js";
import countSeniors from "./solutions/countSeniors.js";
import minSwaps from "./solutions/minSwaps.js";
import canBeEqual from "./solutions/canBeEqual.js";
import rangeSum from "./solutions/rangeSum.js";
import kthDistinct from "./solutions/kthDistincet.js";
import minimumPushes from "./solutions/minimumPushes.js";
import * as numberToWords from "./solutions/numberToWords.js";
import * as spiralMatrixIII from "./solutions/spiralMatrixIII.js";

const problems = document.querySelectorAll(".problem");
const problemObjects = {
  "problem-1": numTeams,
  "problem-2": minimumDeletions,
  "problem-3": minHeightShelves,
  "problem-4": countSeniors,
  "problem-5": minSwaps,
  "problem-6": canBeEqual,
  "problem-7": rangeSum,
  "problem-8": kthDistinct,
  "problem-9": minimumPushes,
  "problem-10": numberToWords,
  "problem-11": spiralMatrixIII,
};
const problemDropdown = document.querySelector("#problem-dropdown");

problemDropdown.addEventListener("change", handleChangeProblem);

for (const problem of problems) {
  const answer = problem.querySelector(".answer");
  const solutionButton = problem.querySelector(".solution-button");
  const testButton = problem.querySelector(".test-button");
  const result = problem.querySelector(".result");

  let problemObject = problemObjects[problem.id];
  testButton.addEventListener("click", () =>
    handleClick(result, problemObject)
  );
  solutionButton.addEventListener("click", (event) => {
    answer.classList.toggle("hidden");
    event.target.textContent = answer.classList.contains("hidden")
      ? "Show Solution"
      : "Hide Solution";
  });
  answer.textContent = `${problemObject.method}`;
}

// Taken from https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
if (Array.prototype.equals)
  console.warn(
    "Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code."
  );
Array.prototype.equals = function (array) {
  if (!array) return false;
  if (array === this) return true;
  if (this.length != array.length) return false;

  for (let i = 0, l = this.length; i < l; i++) {
    if (this[i] instanceof Array && array[i] instanceof Array) {
      if (!this[i].equals(array[i])) return false;
    } else if (this[i] != array[i]) {
      return false;
    }
  }
  return true;
};

Object.defineProperty(Array.prototype, "equals", { enumerable: false });

function handleClick(resultElement, problem) {
  resultElement.innerHTML = "";

  const containerElement = document.createElement("div");

  for (const test of problem.tests) {
    let resultElement = document.createElement("p");
    let result = problem.method(test.input);
    let inputString = getDisplayString(test.input);
    let outputString = getDisplayString(test.expectedOutput);
    let resultString = getDisplayString(result);

    resultElement.innerHTML = `<br>Input: ${inputString}<br/>Expected Result: ${outputString}<br/>Actual Result: ${resultString}`;

    let passed =
      typeof result === "object"
        ? result.equals(test.expectedOutput)
        : result === test.expectedOutput;
    resultElement.className = passed ? "passed-test" : "failed-test";
    containerElement.appendChild(resultElement);
  }

  resultElement.appendChild(containerElement);
}

function handleChangeProblem(event) {
  for (const problem of problems) {
    if (problem.id === event.target.value) {
      problem.style.display = "grid";
    } else {
      problem.style.display = "none";
    }
  }
}

function getDisplayString(value) {
  if (typeof value === "object") {
    return JSON.stringify(value);
  } else {
    return `${value}`;
  }
}
