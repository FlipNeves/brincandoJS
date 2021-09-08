const timerValue    = document.querySelector('.timerValue');
const iniciar       = document.querySelector('.btnIniciar');
const pausar        = document.querySelector('.btnPausar');
const reiniciar     = document.querySelector('.btnReiniciar');
//Armazena a contagem do cronômetro.
let tempoPassado    = 0;
//Usada para iniciar o processo de contagem.
var tempo;
//Classes usadas no timerValue.
const classesCSS    = ['iniciarTempo', 'pausouTempo', 'reiniciouTempo'];

//retorna o valor no modelo horas para ser apresentado no cronômetro.
function instanciaHora(segundos) {
    const hora = new Date(segundos * 1000);
    return hora.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

//faz a contagem do tempo, chamando instanciaHora para a atualização do seu valor.
function contTempo() {
    tempoPassado++;
    timerValue.innerHTML = instanciaHora(tempoPassado);
}

//inicia o processo de contagem do cronômetro.
function startaRelogio() {
    clearInterval(tempo);
    tempo = setInterval(contTempo, 1000)
}

//Limpa o processo de contagem do cronômetro.
function pausaRelogio() {
    clearInterval(tempo);
}

//Reinicia o valor geral do cronômetro e pausa no valor inicial.
function reiniciaRelogio() {
    pausaRelogio();
    tempoPassado = 0;
    timerValue.innerHTML = instanciaHora(tempoPassado);
}

//Faz a alteração do CSS para respeitar o modelo selecionado no botão.
function alteraCSS(novaClasse) {
    //Faz a retirada das classes usadas
    for(item in classesCSS){
        timerValue.classList.remove(classesCSS[item]);
    }
    //por fim aplica a única classe necessária.
    timerValue.classList.add(novaClasse);
}

//Inicia o processo do cronômetro.
iniciar.addEventListener('click', function(event) {
    alteraCSS(classesCSS[0]);
    startaRelogio();
});

//Inicia o processo de pausa do cronômetro.
pausar.addEventListener('click', function(event) {
    alteraCSS(classesCSS[1]);
    pausaRelogio();
});

//Inicia o processo de Reinicio do cronômetro.
reiniciar.addEventListener('click', function(event) {
    alteraCSS(classesCSS[2]);
    reiniciaRelogio();
});
