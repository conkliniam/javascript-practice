const canBeEqual = (function () {
  const method = function ({ target, arr }) {
    if (target.length !== arr.length) {
      return false;
    }

    let values = {};

    for (let i = 0; i < target.length; i++) {
      if (target[i] in values) {
        values[target[i]]++;
        if (values[target[i]] === 0) {
          delete values[target[i]];
        }
      } else {
        values[target[i]] = 1;
      }

      if (arr[i] in values) {
        values[arr[i]]--;
        if (values[arr[i]] === 0) {
          delete values[arr[i]];
        }
      } else {
        values[arr[i]] = -1;
      }
    }

    return Object.keys(values).length === 0;
  };

  const tests = [
    { input: { target: [7], arr: [7] }, expectedOutput: true },
    { input: { target: [3, 7, 9], arr: [3, 7, 11] }, expectedOutput: false },
  ];

  return { method, tests };
})();

export default canBeEqual;
