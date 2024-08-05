const kthDistinct = (function () {
  const method = function ({ arr, k }) {
    let counts = arr.reduce((count, item) => {
      if (item in count) {
        count[item]++;
      } else {
        count[item] = 1;
      }
      return count;
    }, {});

    let distinct = arr.reduce((dist, item) => {
      if (counts[item] === 1) {
        dist.push(item);
      }
      return dist;
    }, []);

    if (k > distinct.length) {
      return "";
    } else {
      return distinct[k - 1];
    }
  };

  const tests = [
    {
      input: { arr: ["d", "b", "c", "b", "c", "a"], k: 2 },
      expectedOutput: "a",
    },
    {
      input: { arr: ["aaa", "aa", "a"], k: 1 },
      expectedOutput: "aaa",
    },
    {
      input: { arr: ["a", "b", "a"], k: 3 },
      expectedOutput: "",
    },
  ];
  return { method, tests };
})();

export default kthDistinct;
