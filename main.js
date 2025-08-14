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
const dinheiro = document.getElementById("valor");
const relogio = document.getElementById("relogio");
const dia = document.getElementById("dia");
const SomPedra = new Audio('sons/picareta.wav');
const SomErva = new Audio('sons/foice.wav');
const SomArar = new Audio('sons/enxada.wav');
const SomPlantar = new Audio('sons/plantar.wav');
const SomDinheiro = new Audio('sons/dinheiro.wav');
const SomDinheiro2 = new Audio('sons/dinheiro2.wav');
const SomRegador = new Audio('sons/regador.wav');
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
    SomDinheiro.play();
  } else {
    semDinheiro();
  }
});

alho.addEventListener("click", () => {
  if (money >= 3) {
    money -= 3;
    garlic_seeds += 1;
    atualiza();
    SomDinheiro.play();
  } else {
    semDinheiro();
  }
});

cenoura.addEventListener("click", () => {
  if (money >= 4) {
    money -= 4;
    carrot_seeds += 1;
    atualiza();
    SomDinheiro.play();
  } else {
    semDinheiro();
  }
});

function semDinheiro() {
  dinheiro.classList.add("piscar");
  setTimeout(() => {
    dinheiro.classList.remove("piscar");
  }, 2000);
}

botaoBatata.addEventListener("click", () => {
  ferramentaSelecionada = null;
  document.body.style.cursor = "url('sprites/SB.png') 0 0, auto";
  sementeSelecionada = "batata";
});

botaoAlho.addEventListener("click", () => {
  ferramentaSelecionada = null;
  document.body.style.cursor = "url('sprites/SA.png') 0 0, auto";
  sementeSelecionada = "alho";
});

botaoCenoura.addEventListener("click", () => {
  ferramentaSelecionada = null;
  document.body.style.cursor = "url('sprites/SC.png') 0 0, auto";
  sementeSelecionada = "cenoura";
});

picareta.addEventListener("click", () => {
  ferramentaSelecionada = "picareta";
  document.body.style.cursor = "url('sprites/P.png'), auto";
  sementeSelecionada = null;
});

enxada.addEventListener("click", () => {
  ferramentaSelecionada = "enxada";
  document.body.style.cursor = "url('sprites/E.png'), auto";
  sementeSelecionada = null;
});

regador.addEventListener("click", () => {
  ferramentaSelecionada = "regador";
  document.body.style.cursor = "url('sprites/R.png'), auto";
  sementeSelecionada = null;
});

foice.addEventListener("click", () => {
  ferramentaSelecionada = "foice";
  document.body.style.cursor = "url('sprites/F.png'), auto";
  sementeSelecionada = null;
});

relogio.addEventListener("click", () => {
  for (let i = 0; i < 144; i++) {
    if (
      celulas[i].classList.contains("potato1") ||
      celulas[i].classList.contains("potato2") ||
      celulas[i].classList.contains("potato3") ||
      celulas[i].classList.contains("potato4") ||
      celulas[i].classList.contains("potato5") ||
      celulas[i].classList.contains("garlic1") ||
      celulas[i].classList.contains("garlic2") ||
      celulas[i].classList.contains("garlic3") ||
      celulas[i].classList.contains("garlic4") ||
      celulas[i].classList.contains("carrot1") ||
      celulas[i].classList.contains("carrot2") ||
      celulas[i].classList.contains("carrot3")
    ) {
      celulas[i].classList.remove(...celulas[i].classList);
      celulas[i].classList.add("arado");
    } else if (celulas[i].classList.contains("potato1R")) {
      celulas[i].classList.remove("potato1R");
      celulas[i].classList.add("potato2");
    } else if (celulas[i].classList.contains("potato2R")) {
      celulas[i].classList.remove("potato2R");
      celulas[i].classList.add("potato3");
    } else if (celulas[i].classList.contains("potato3R")) {
      celulas[i].classList.remove("potato3R");
      celulas[i].classList.add("potato4");
    } else if (celulas[i].classList.contains("potato4R")) {
      celulas[i].classList.remove("potato4R");
      celulas[i].classList.add("potato5");
    } else if (celulas[i].classList.contains("potato5R")) {
      celulas[i].classList.remove("potato5R");
      celulas[i].classList.add("potato6");
    } else if (celulas[i].classList.contains("garlic1R")) {
      celulas[i].classList.remove("garlic1R");
      celulas[i].classList.add("garlic2");
    } else if (celulas[i].classList.contains("garlic2R")) {
      celulas[i].classList.remove("garlic2R");
      celulas[i].classList.add("garlic3");
    } else if (celulas[i].classList.contains("garlic3R")) {
      celulas[i].classList.remove("garlic3R");
      celulas[i].classList.add("garlic4");
    } else if (celulas[i].classList.contains("garlic4R")) {
      celulas[i].classList.remove("garlic4R");
      celulas[i].classList.add("garlic5");
    } else if (celulas[i].classList.contains("carrot1R")) {
      celulas[i].classList.remove("carrot1R");
      celulas[i].classList.add("carrot2");
    } else if (celulas[i].classList.contains("carrot2R")) {
      celulas[i].classList.remove("carrot2R");
      celulas[i].classList.add("carrot3");
    } else if (celulas[i].classList.contains("carrot3R")) {
      celulas[i].classList.remove("carrot3R");
      celulas[i].classList.add("carrot4");
    }
  }
  day += 1;
  atualiza();
});

celulas.forEach((celula) => {
  celula.addEventListener("click", () => {
    if (
      celula.classList.contains("potato6") ||
      celula.classList.contains("garlic5") ||
      celula.classList.contains("carrot4")
    ) {
      if (celula.classList.contains("potato6")) {
        celula.classList.remove("potato6");
        celula.classList.add("arado");
        money += 10;
      } else if (celula.classList.contains("garlic5")) {
        celula.classList.remove("garlic5");
        celula.classList.add("arado");
        money += 6;
      } else if (celula.classList.contains("carrot4")) {
        celula.classList.remove("carrot4");
        celula.classList.add("arado");
        money += 8;
      }
      atualiza();
      SomDinheiro2.play();
    } else if (
      !celula.classList.contains("potato1") &&
      !celula.classList.contains("potato2") &&
      !celula.classList.contains("potato3") &&
      !celula.classList.contains("potato4") &&
      !celula.classList.contains("potato5") &&
      !celula.classList.contains("potato6") &&
      !celula.classList.contains("potato1R") &&
      !celula.classList.contains("potato2R") &&
      !celula.classList.contains("potato3R") &&
      !celula.classList.contains("potato4R") &&
      !celula.classList.contains("potato5R") &&
      !celula.classList.contains("garlic1") &&
      !celula.classList.contains("garlic2") &&
      !celula.classList.contains("garlic3") &&
      !celula.classList.contains("garlic4") &&
      !celula.classList.contains("garlic5") &&
      !celula.classList.contains("garlic1R") &&
      !celula.classList.contains("garlic2R") &&
      !celula.classList.contains("garlic3R") &&
      !celula.classList.contains("garlic4R") &&
      !celula.classList.contains("carrot1") &&
      !celula.classList.contains("carrot2") &&
      !celula.classList.contains("carrot3") &&
      !celula.classList.contains("carrot4") &&
      !celula.classList.contains("carrot1R") &&
      !celula.classList.contains("carrot2R") &&
      !celula.classList.contains("carrot3R") &&
      celula.classList.contains("arado")
    ) {
      if (sementeSelecionada === "batata" && potato_seeds > 0) {
        celula.classList.add("potato1");
        potato_seeds--;
        SomPlantar.play();
      } else if (sementeSelecionada === "alho" && garlic_seeds > 0) {
        celula.classList.add("garlic1");
        garlic_seeds--;
        SomPlantar.play();
      } else if (sementeSelecionada === "cenoura" && carrot_seeds > 0) {
        celula.classList.add("carrot1");
        carrot_seeds--;
        SomPlantar.play();
      }
    } else if (ferramentaSelecionada === "enxada") {
      if (celula.classList.contains("grama")) {
        celula.classList.remove("grama");
        celula.classList.add("arado");
        SomArar.play();
      }
    } else if (ferramentaSelecionada === "picareta") {
      if (celula.classList.contains("pedra")) {
        celula.classList.remove("pedra");
        celula.classList.add("grama");
        SomPedra.play();
      }
    } else if (ferramentaSelecionada === "foice") {
      if (celula.classList.contains("erva")) {
        celula.classList.remove("erva");
        celula.classList.add("grama");
        SomErva.play();
      }
    } else if (ferramentaSelecionada === "regador") {
      if (celula.classList.contains("potato1")) {
        celula.classList.remove("potato1");
        celula.classList.add("potato1R");
        SomRegador.play();
      } else if (celula.classList.contains("potato2")) {
        celula.classList.remove("potato2");
        celula.classList.add("potato2R");
        SomRegador.play();
      } else if (celula.classList.contains("potato3")) {
        celula.classList.remove("potato3");
        celula.classList.add("potato3R");
        SomRegador.play();
      } else if (celula.classList.contains("potato4")) {
        celula.classList.remove("potato4");
        celula.classList.add("potato4R");
        SomRegador.play();
      } else if (celula.classList.contains("potato5")) {
        celula.classList.remove("potato5");
        celula.classList.add("potato5R");
        SomRegador.play();
      } else if (celula.classList.contains("garlic1")) {
        celula.classList.remove("garlic1");
        celula.classList.add("garlic1R");
        SomRegador.play();
      } else if (celula.classList.contains("garlic2")) {
        celula.classList.remove("garlic2");
        celula.classList.add("garlic2R");
        SomRegador.play();
      } else if (celula.classList.contains("garlic3")) {
        celula.classList.remove("garlic3");
        celula.classList.add("garlic3R");
        SomRegador.play();
      } else if (celula.classList.contains("garlic4")) {
        celula.classList.remove("garlic4");
        celula.classList.add("garlic4R");
        SomRegador.play();
      } else if (celula.classList.contains("carrot1")) {
        celula.classList.remove("carrot1");
        celula.classList.add("carrot1R");
        SomRegador.play();
      } else if (celula.classList.contains("carrot2")) {
        celula.classList.remove("carrot2");
        celula.classList.add("carrot2R");
        SomRegador.play();
      } else if (celula.classList.contains("carrot3")) {
        celula.classList.remove("carrot3");
        celula.classList.add("carrot3R");
        SomRegador.play();
      }
    }
    atualiza();
  });
});
