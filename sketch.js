let palavra;

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatoria();
}
function palavraAleatoria() {
  let palavras = [
    "Tapioca",
    "Churros",
    "Pastel",
    "Brigadeiro",
    "Biscoito",
    "Paçoca",
  ];
  return random(palavras);
}

function inicializaCores() {
  background("#CEAF82");
  fill("white");
  stroke("#5B3B16");
  strokeWeight(5);
  textFont("Impact");
  textSize(50);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
  
  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
}