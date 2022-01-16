let bkgd, chess, pieces, moves;
const SIZE = 50;

function preload() {
    bkgd = loadImage('/assets/chess/_bkgd.png');
    pieces = {
      bk: loadImage('/assets/chess/bk.png'),
      bq: loadImage('/assets/chess/bq.png'),
      br: loadImage('/assets/chess/br.png'),
      bn: loadImage('/assets/chess/bn.png'),
      bb: loadImage('/assets/chess/bb.png'),
      bp: loadImage('/assets/chess/bp.png'),
      wk: loadImage('/assets/chess/wk.png'),
      wq: loadImage('/assets/chess/wq.png'),
      wr: loadImage('/assets/chess/wr.png'),
      wn: loadImage('/assets/chess/wn.png'),
      wb: loadImage('/assets/chess/wb.png'),
      wp: loadImage('/assets/chess/wp.png'),
    };
}

function setup() {
    createCanvas(8 * SIZE, 8 * SIZE);
    chess = new Chess();
    moves = "d4 d5 Bf4 Nf6 e3 Bf5 Nf3 h6 Bb5+ c6 Bd3 Bg4 h3 Bh5 g4 Bg6 Bxg6 fxg6 Ne5 g5 Bg3 Ne4 Ng6 Rg8 Nc3 Nxg3 fxg3 Qd6 Ne5 Nd7 Qd3 Nxe5 dxe5 Qxe5 Qg6+ Kd8 Qf7 Rh8 O-O-O Qxe3+ Kb1 Qxg3 Qe6 Qd6 Qxd6+ exd6 Rde1 Kd7 Rhf1 a5 Rf7+ Kd8 Rxb7 a4 b3 d4 Nxa4 d3 cxd3 d5 Nb6 Ra6 Rd7#".split(" ");
  }
  
function draw() {
  image(bkgd, 0, 0);
  const board = chess.board();
  for (var y = 0; y < 8; y++) {
    for (var x = 0; x < 8; x++) {
      const field = board[y][x];
      if (field) {
        image(pieces[field.color + field.type], x * SIZE, y * SIZE);
      }
    }
  }
}

function mouseClicked() {
  chess.move(moves.shift());
}