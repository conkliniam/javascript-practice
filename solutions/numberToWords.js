const method = function (num) {
  const NUMBERS = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];

  const TENS = [
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  const HUNDRED = "Hundred";
  const THOUSANDS = ["Thousand", "Million", "Billion"];

  const getHundredsString = function (hundreds) {
    let hundredsString = "";

    if (hundreds > 0) {
      let tens = hundreds % 100;

      if (tens > 19) {
        let ones = tens % 10;
        tens = Math.floor(tens / 10);

        if (ones > 0) {
          hundredsString =
            ` ${TENS[tens - 2]} ${NUMBERS[ones]}` + hundredsString;
        } else {
          hundredsString = ` ${TENS[tens - 2]}` + hundredsString;
        }
      } else if (tens > 0) {
        hundredsString = ` ${NUMBERS[tens]}` + hundredsString;
      }

      hundreds = Math.floor(hundreds / 100);

      if (hundreds > 0) {
        hundredsString = ` ${NUMBERS[hundreds]} ${HUNDRED}` + hundredsString;
      }
    }

    return hundredsString;
  };

  let result = "";

  if (num === 0) {
    return NUMBERS[0];
  }

  let hundreds = num % 1000;
  let remainder = Math.floor(num / 1000);
  let place = 0;

  while (remainder > 0 || hundreds > 0) {
    let hundredsString = getHundredsString(hundreds);

    if (hundredsString !== "") {
      if (place > 0) {
        if (place > THOUSANDS.length) {
          return "Error: Number is too large";
        }
        result = `${hundredsString} ${THOUSANDS[place - 1]}` + result;
      } else {
        result = hundredsString;
      }
    }

    hundreds = remainder % 1000;
    remainder = Math.floor(remainder / 1000);
    place++;
  }

  if (result.length > 0) {
    return result.slice(1);
  } else {
    return result;
  }
};

const tests = [
  { input: 123, expectedOutput: "One Hundred Twenty Three" },
  { input: 12345, expectedOutput: "Twelve Thousand Three Hundred Forty Five" },
  {
    input: 1234567,
    expectedOutput:
      "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven",
  },
  {
    input: 20,
    expectedOutput: "Twenty",
  },
  {
    input: 0,
    expectedOutput: "Zero",
  },
  {
    input: 2147483647,
    expectedOutput:
      "Two Billion One Hundred Forty Seven Million Four Hundred Eighty Three Thousand Six Hundred Forty Seven",
  },
  {
    input: 1000000000000,
    expectedOutput: "Error: Number is too large",
  },
];

export { method, tests };
