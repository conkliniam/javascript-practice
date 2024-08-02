const minimumDeletions = (function () {
  const method = function (s) {
    let aAfter = 0;
    let bBefore = 0;
    let minimum;
    let start = s.indexOf("b");
    let end = s.lastIndexOf("a");

    if (start === -1 || end === -1 || end < start) {
      return 0;
    }

    for (let i = start; i <= end; i++) {
      if (s[i] === "a") {
        aAfter++;
      }
    }

    for (let i = start; i <= end; i++) {
      if (s[i] === "a") {
        aAfter--;
      }

      let currentMinimum = bBefore + aAfter;

      if (minimum === undefined || currentMinimum < minimum) {
        minimum = currentMinimum;

        if (minimum === 0) {
          return minimum;
        }
      }

      if (s[i] === "b") {
        bBefore++;
      }
    }

    return minimum;
  };
  const tests = [
    { input: "aaabbb", expectedOutput: 0 },
    { input: "aaaaaaa", expectedOutput: 0 },
    { input: "bbbbbbbb", expectedOutput: 0 },
    { input: "aababbab", expectedOutput: 2 },
    { input: "bbaaaaabb", expectedOutput: 2 },
    { input: "bbbbaaaaabb", expectedOutput: 4 },
  ];
  return { method, tests };
})();

export default minimumDeletions;
