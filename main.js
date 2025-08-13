const picareta = document.getElementById("picareta");
const enxada = document.getElementById("enxada");
const regador = document.getElementById("regador");
const foice = document.getElementById("foice");
const botaoBatata = document.getElementById("s1");
const botaoAlho = document.getElementById("s2");
const botaoCenoura = document.getElementById("s3");
const sementesBatata = document.getElementById("q1");
const sementesAlho = document.getElementById("q2");
const sementesCenoura = document.getElementById("q3");
const batata = document.getElementById("batata");
const alho = document.getElementById("alho");
const cenoura = document.getElementById("cenoura");
const plantacao = document.getElementById("Plantacao");
let money = 500;
let day = 1;
let potato_seeds = 0;
let garlic_seeds = 0;
let carrot_seeds = 0;
let ferramentaSelecionada = null;
let sementeSelecionada = null;
atualiza();

function atualiza() {
  dinheiro.textContent = money;
  dia.textContent = day;
  sementesBatata.textContent = potato_seeds;
  sementesAlho.textContent = garlic_seeds;
  sementesCenoura.textContent = carrot_seeds;
}

let c = 12;
let espaco = 0;
const celulas = [];

for (let i = 0; i < 144; i++) {
  const celula = document.createElement("span");
  const linha = Math.floor(i / c);
  const coluna = i % c;

  if ((linha + coluna) % 2 === 0) {
    celula.classList.add("erva");
  } else {
    celula.classList.add("pedra");
  }
  plantacao.appendChild(celula);
  celulas.push(celula);
}

batata.addEventListener("click", () => {
  if (money >= 5) {
    money -= 5;
    potato_seeds += 1;
    atualiza();
  }
});

alho.addEventListener("click", () => {
  if (money >= 3) {
    money -= 3;
    garlic_seeds += 1;
    atualiza();
  }
});

cenoura.addEventListener("click", () => {
  if (money >= 4) {
    money -= 4;
    carrot_seeds += 1;
    atualiza();
  }
});