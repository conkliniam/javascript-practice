const countSeniors = (function () {
  const method = function (details) {
    return details.reduce((seniors, info) => {
      let age = Number(info.substr(11, 2));
      return age > 60 ? seniors + 1 : seniors;
    }, 0);
  };
  const tests = [
    {
      input: ["7868190130M7522", "5303914400F9211", "9273338290F4010"],
      expectedOutput: 2,
    },
    {
      input: ["1313579440F2036", "2921522980M5644"],
      expectedOutput: 0,
    },
  ];
  return { method, tests };
})();

export default countSeniors;
