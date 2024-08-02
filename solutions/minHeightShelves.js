const minHeightShelves = (function () {
  const method = function ({ books, shelfWidth }) {
    let length = books.length;
    let dp = new Array(length + 1);
    dp[0] = 0;

    for (let i = 1; i <= length; i++) {
      let width = books[i - 1][0];
      let height = books[i - 1][1];

      dp[i] = dp[i - 1] + height;

      for (let j = i - 1; j > 0; j--) {
        width += books[j - 1][0];

        if (width > shelfWidth) {
          break;
        }

        height = Math.max(height, books[j - 1][1]);
        dp[i] = Math.min(dp[i], dp[j - 1] + height);
      }
    }

    return dp[length];
  };
  const tests = [
    {
      input: {
        books: [
          [1, 1],
          [2, 3],
          [2, 3],
          [1, 1],
          [1, 1],
          [1, 1],
          [1, 2],
        ],
        shelfWidth: 4,
      },
      expectedOutput: 6,
    },
    {
      input: {
        books: [
          [1, 3],
          [2, 4],
          [3, 2],
        ],
        shelfWidth: 6,
      },
      expectedOutput: 4,
    },
  ];

  return { method, tests };
})();

export default minHeightShelves;
