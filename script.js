import numTeams from "./solutions/numTeams.js";
import minimumDeletions from "./solutions/minimumDeletions.js";
import minHeightShelves from "./solutions/minHeightShelves.js";
import countSeniors from "./solutions/countSeniors.js";
import minSwaps from "./solutions/minSwaps.js";

const problems = document.querySelectorAll(".problem");
const problemObjects = {
  "problem-1": numTeams,
  "problem-2": minimumDeletions,
  "problem-3": minHeightShelves,
  "problem-4": countSeniors,
  "problem-5": minSwaps,
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

function handleClick(resultElement, problem) {
  resultElement.innerHTML = "";

  const containerElement = document.createElement("div");

  for (const test of problem.tests) {
    let resultElement = document.createElement("p");
    let result = problem.method(test.input);
    let displayedInput;

    if (typeof test.input === "object") {
      displayedInput = JSON.stringify(test.input);
    } else {
      displayedInput = `${test.input}`;
    }

    resultElement.innerHTML = `<br>Input: ${displayedInput}<br>Expected Result: ${test.expectedOutput}<br>Actual Result: ${result}`;

    resultElement.className =
      result === test.expectedOutput ? "passed-test" : "failed-test";
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
