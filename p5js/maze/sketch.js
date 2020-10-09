var cellSize = 20;
var cellCount = 20;

var grid = [];
var stack = [];

var current;
var start;
var end;

var state = 'set start';

function setup() {
  createCanvas(cellSize * cellCount, cellSize * cellCount);
  for (var x = 0; x < cellCount; x++) {
    var rows = [];
    for (var y = 0; y < cellCount; y++) {
      rows.push({
        x,
        y,
        walls: [true, true, true, true],
        visited: false,
        a_star: {
          path: false,
          open: false,
          closed: false,
          g: 0,
          f: 0,
          backDirection: 0
        }
      });
    }
    grid.push(rows);
  }
}

function draw() {
  background(220);
  for (var x = 0; x < cellCount; x++) {
    for (var y = 0; y < cellCount; y++) {
      paintCell(grid[x][y]);
    }
  }
  if (state == 'creating') {
    step();
    if (current == start) {
      state = 'set end';
    }
  }
  if (state == 'solving') {
    findWay();
  }
  if (state == 'solved') {
    markPath();
    if (current == start) {
      state = 'done';
    }
  }
}

function mousePressed() {
  if (state == 'set start') {
    start = grid[floor(mouseX / cellSize)][floor(mouseY / cellSize)];
    current = start;
    current.visited = true;
    state = 'creating';
  }
  if (state == 'set end') {
    end = grid[floor(mouseX / cellSize)][floor(mouseY / cellSize)];
    state = 'solving';
    current.a_star.open = true;
  }
  if (state == 'debug') {
    state = 'solving';
  }
}

function neighborOf(cell, direction) {
  if (direction == 0 && cell.y > 0) { // up
    return grid[cell.x][cell.y - 1];
  }
  if (direction == 1 && current.x < cellCount - 1) { // right
    return grid[cell.x + 1][cell.y];
  }
  if (direction == 2 && current.y < cellCount - 1) { // down
    return grid[cell.x][cell.y + 1];
  }
  if (direction == 3 && current.x > 0) { // left
    return grid[cell.x - 1][cell.y];
  }
  return false;
}

function step() {
  var possibilities = [];
  for (var direction = 0; direction < 4; direction++) {
    var candidate = neighborOf(current, direction);
    if (candidate && candidate.visited == false) {
      possibilities.push({
        direction,
        cell: candidate
      });
    }
  }
  if (possibilities.length) {
    var next = random(possibilities);
    current.walls[next.direction] = false;
    stack.push(current);
    current = next.cell;
    current.visited = true;
    current.walls[opposite(next.direction)] = false;
  } else {
    if (stack.length > 1) {
      stack.pop();
      current = stack[stack.length - 1];
    }
  }
}

function opposite(direction) {
  var opposites = [2, 3, 0, 1];
  return opposites[direction];
}

function findWay() {  
  // find next open cell with lowest f
  current = grid.flat().filter(function(cell) {
    return cell.a_star.open && !cell.a_star.closed;
  }).reduce(function(smallest, cell) {
    if (!smallest) return cell;
    return smallest.a_star.f >= cell.a_star.f ? cell : smallest;
  });
  
  current.a_star.closed = true;
  if (current == end) {
    state = 'solved';
    return;
  }
  
  // find possibilities
  for (var direction = 0; direction < 4; direction++) {
    if (current.walls[direction]) continue;
    var next = neighborOf(current, direction);
    if (next.a_star.closed) continue;
    var g = current.a_star.g + 1; // distance is always 1
    if (next.a_star.open && next.a_star.g <= g) continue; // there is a more direct way
    next.a_star.backDirection = opposite(direction);
    next.a_star.g = g;
    next.a_star.f = g + guessDistance(next.x, next.y, end.x, end.y);
    next.a_star.open = true;
  }
}

function guessDistance(x1, y1, x2, y2) {
  return abs(x1 - x2) + abs(y1 - y2);
}

function markPath() {
  current.a_star.path = true;
  current = neighborOf(current, current.a_star.backDirection);
}
  
function paintCell(cell) {
  push();
  translate(cell.x * cellSize, cell.y * cellSize);
  var color = false;
  if (cell.visited) color = '#ffc75f';
  if (cell == start) color = '#f9f871';
  if (cell == end) color = '#ff9671';
  if (cell.a_star.path) color = '#ff6f91';
  if (cell == current) color = '#845ec2';
  if (color) {
    fill(color);
    stroke(color);
    square(0, 0, cellSize);
    stroke('black');
  }
  var lines = [
    [0, 0, cellSize, 0],
    [cellSize, 0, cellSize, cellSize],
    [cellSize, cellSize, 0, cellSize],
    [0, cellSize, 0, 0],
  ];
  for (var i = 0; i < lines.length; i++) {
    if (cell.walls[i]) {
      line(lines[i][0], lines[i][1], lines[i][2], lines[i][3]);
    }
  }
  pop();
}