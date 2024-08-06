const minimumPushes = (function () {
  const method = function (word) {
    const MAX_KEY_PADS = 8;
    const sortableCounts = "abcdefghijklmnopqrstuvwxyz"
      .split("")
      .map((char) => [char, 0]);
    let pushes = 0;

    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      let index = char.charCodeAt(0) - "a".charCodeAt(0);
      sortableCounts[index][1] += 1;
    }

    sortableCounts.sort((a, b) => b[1] - a[1]);

    let multiplier = 1;
    let keyPads = 1;

    for (const charCount of sortableCounts) {
      if (charCount[1] === 0) {
        break;
      }

      pushes += charCount[1] * multiplier;

      if (keyPads < MAX_KEY_PADS) {
        keyPads++;
      } else {
        keyPads = 1;
        multiplier++;
      }
    }

    return pushes;
  };

  const tests = [
    { input: "abcde", expectedOutput: 5 },
    { input: "xyzxyzxyzxyz", expectedOutput: 12 },
    { input: "aabbccddeeffgghhiiiiii", expectedOutput: 24 },
  ];

  return { method, tests };
})();

export default minimumPushes;
