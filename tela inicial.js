const comecar = document.getElementById("Start");
const creditos = document.getElementById("Creditos");
const mensagem = document.getElementById("MensagemCreditos");
const fechar = document.getElementById("Fechar");

creditos.addEventListener("click", () => {
    mensagem.style.display = "block";
});

fechar.addEventListener("click", ()=>{
    mensagem.style.display = "none";
})