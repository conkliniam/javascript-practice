const minSwaps = (function () {
  const method = function (nums) {
    let totalOnes = 0;
    let currentOnes = 0;
    let maxOnes = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
        currentOnes += nums[totalOnes++];
      }
    }

    if (totalOnes === currentOnes || totalOnes === nums.length) {
      return 0;
    }

    if (currentOnes > maxOnes) {
      maxOnes = currentOnes;
    }

    for (let i = 0; i < nums.length; i++) {
      let nextIndex = (i + totalOnes) % nums.length;

      if (nums[i] !== nums[nextIndex]) {
        currentOnes = nums[nextIndex] === 1 ? currentOnes + 1 : currentOnes - 1;
      }

      if (currentOnes > maxOnes) {
        maxOnes = currentOnes;
      }
    }

    return totalOnes - maxOnes;
  };
  const tests = [
    { input: [0, 1, 1, 1, 0, 0, 1, 1, 0], expectedOutput: 2 },
    { input: [1, 1, 0, 0, 1], expectedOutput: 0 },
    { input: [1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0], expectedOutput: 2 },
    { input: [0, 1, 0, 1, 1, 0, 0], expectedOutput: 1 },
  ];

  return { method, tests };
})();

export default minSwaps;
