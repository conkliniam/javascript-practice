const method = function ({ rows, cols, rStart, cStart }) {
  const isValidCell = function (row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols;
  };

  const RIGHT = "right";
  const DOWN = "down";
  const LEFT = "left";
  const UP = "up";
  const iterations = {
    [RIGHT]: { count: 1, modifier: [0, 1], next: DOWN },
    [DOWN]: { count: 1, modifier: [1, 0], next: LEFT },
    [LEFT]: { count: 2, modifier: [0, -1], next: UP },
    [UP]: { count: 2, modifier: [-1, 0], next: RIGHT },
  };
  let direction = RIGHT;
  let row = rStart;
  let col = cStart;

  const getIterations = function () {
    return iterations[direction].count;
  };

  const move = function () {
    row += iterations[direction].modifier[0];
    col += iterations[direction].modifier[1];
  };

  const changeDirection = function () {
    iterations[direction].count += 2;
    direction = iterations[direction].next;
  };

  const cells = [];
  const expectedCellCount = rows * cols;
  let cell = [row, col];
  cells.push(cell);

  while (cells.length !== expectedCellCount) {
    let iterations = getIterations();

    for (let i = 0; i < iterations; i++) {
      move();

      if (isValidCell(row, col)) {
        cell = [row, col];
        cells.push(cell);

        if (cells.length === expectedCellCount) {
          break;
        }
      }
    }

    changeDirection();
  }

  return cells;
};

const tests = [
  {
    input: { rows: 1, cols: 4, rStart: 0, cStart: 0 },
    expectedOutput: [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ],
  },
  {
    input: { rows: 5, cols: 6, rStart: 1, cStart: 4 },
    expectedOutput: [
      [1, 4],
      [1, 5],
      [2, 5],
      [2, 4],
      [2, 3],
      [1, 3],
      [0, 3],
      [0, 4],
      [0, 5],
      [3, 5],
      [3, 4],
      [3, 3],
      [3, 2],
      [2, 2],
      [1, 2],
      [0, 2],
      [4, 5],
      [4, 4],
      [4, 3],
      [4, 2],
      [4, 1],
      [3, 1],
      [2, 1],
      [1, 1],
      [0, 1],
      [4, 0],
      [3, 0],
      [2, 0],
      [1, 0],
      [0, 0],
    ],
  },
];

export { method, tests };
