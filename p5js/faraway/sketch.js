// zuerst wird das bild in quadrate unterteilt und 
// der durchschnittlicht grauwert dieses quadrats ermittelt.
// hier kann die "auflösung" dieser quadrate bestimmt werden. in pixel.
const quadratGroesse = 10;

// die groesse des bildausschnitts in pixel
const breite = 400,
  hoehe = 400;

// wo der bildausschnitt beginnt
const bildAusschnittX = 0,
  bildAusschnittY = 30;

// farbe der linie
const farbe = '#33ff9f';

function anzahlStricheNachGrauwert(grauwert) {
  return floor(map(grauwert, 0, 255, 10, 0));
}

let img;
let quadrate = [];
let pinselKontakte = [];
let quadratX, quadratY, stiftX, stiftY;


function preload() {
  img = loadImage('eliane.png');
}

function setup() {
  createCanvas(breite, hoehe);
  pixelDensity(1);
  img = img.get(bildAusschnittX, bildAusschnittY, breite, hoehe);
  img.loadPixels();

  for (var startY = 0; startY < (breite / quadratGroesse); startY++) {
    for (var startX = 0; startX < (hoehe / quadratGroesse); startX++) {

      var summe = 0;
      for (var j = 0; j < quadratGroesse; j++) {
        for (var i = 0; i < quadratGroesse; i++) {
          var pos = ((startY * quadratGroesse + j) * breite + startX * quadratGroesse + i) * 4;
          // alpha wert ist der letzte wert des pixels, falls der 0 ist gilt das als "weiss" (255)
          if (img.pixels[pos + 3] == 0) {
            summe = summe + 255;
          } else {
            summe = summe + img.pixels[pos];
          }
        }
      }
      var grauwert = round(summe / (quadratGroesse * quadratGroesse))

      pinselKontakte.push(anzahlStricheNachGrauwert(grauwert));
    }
  }

  quadratX = floor(random(width / quadratGroesse));
  quadratY = floor(random(height / quadratGroesse));

  if (pinselKontakteInQuadrat(quadratX, quadratY) <= 0) {
    [quadratX, quadratY] = findeNaechstesQuadrat(quadratX, quadratY);
  }

  [stiftX, stiftY] = zufallsPunktInQuadrat(quadratX, quadratY);
  console.log('start');

  background(255);
  stroke(farbe);
}

function findeNaechstesQuadrat(startX, startY) {
  var distanz = 1;
  while (distanz < (breite / quadratGroesse)) {

    var kandidaten = rumrennen(distanz);
    for (var i = 0; i < kandidaten.length; i++) {
      var kandidatX = startX + kandidaten[i][0];
      if (kandidatX < 0 || kandidatX >= (breite / quadratGroesse)) continue;
      var kandidatY = startY + kandidaten[i][1];
      if (kandidatY < 0 || kandidatY >= (hoehe / quadratGroesse)) continue;
      if (pinselKontakteInQuadrat(kandidatX, kandidatY) > 0) {
        punktGemalt(kandidatX, kandidatY);
        return [kandidatX, kandidatY];
      }
    }
    distanz++;
  }
  console.log('Fertig!');
  noLoop();
  return [];
}

function rumrennen(distanz) {
  const richtung = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
  ];
  var x = -distanz,
    y = -distanz;
  var result = [];
  for (var r = 0; r < richtung.length; r++) {
    for (var i = 0; i < 2 * distanz; i++) {
      result.push([x, y]);
      x += richtung[r][0];
      y += richtung[r][1];
    }
  }
  result = shuffle(result);
  return result;
}

function pinselKontakteInQuadrat(x, y) {
  const pos = y * (breite / quadratGroesse) + x;
  return pinselKontakte[pos];
}

function punktGemalt(x, y) {
  const pos = y * (width / quadratGroesse) + x;
  pinselKontakte[pos] = pinselKontakte[pos] - 1;
}

function zufallsPunktInQuadrat(x, y) {
  const pointX = x * quadratGroesse + floor(random(quadratGroesse));
  const pointY = y * quadratGroesse + floor(random(quadratGroesse));
  return [pointX, pointY];
}

function draw() {
  var naechstesQuadratX, naechstesQuadratY, naechsterStiftX, naechsterStiftY;

  [naechstesQuadratX, naechstesQuadratY] = findeNaechstesQuadrat(quadratX, quadratY);
  if (!naechstesQuadratX && !naechstesQuadratY) {
    // wenn nichts mehr zurückkommt hören wir auf.
    return;
  }
  quadratX = naechstesQuadratX;
  quadratY = naechstesQuadratY;

  [naechsterStiftX, naechsterStiftY] = zufallsPunktInQuadrat(quadratX, quadratY);

  line(stiftX, stiftY, naechsterStiftX, naechsterStiftY);

  stiftX = naechsterStiftX;
  stiftY = naechsterStiftY;
}