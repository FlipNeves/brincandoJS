function Calculadora() {
    //Captura o display da calculadora
    this.display = document.querySelector('.display');

    //Função principal, chamando a função de clique nos botões e o uso de teclas.
    this.startaCalculadora = () => {
        this.cliqueTeclas();
        this.pressionaEnter();
    };

    //Tenta realizar a conta descrita no display
    this.valorRealizaConta = () => {
        try {
            this.display.value = eval(this.display.value)
            if (!this.display.value){
                this.display.value = '';
                alert('Não foi possível realizar a conta!');
                this.display.focus();
            }
        } catch (e) {
            alert('Não foi possível realizar a conta!');
            this.display.focus();
        }
    };

    //Reseta a calculadora, ativando o focus no display
    this.valorResetaConta = () => {
        this.display.value = '';
        this.display.focus();
    };

    //Adiciona o novo dígito no display
    this.valorNumEmDisplay = (value) => {
        this.display.value += value;
        this.display.focus();
    };

    //Deleta o último valor mostrado no display
    this.valorDisplayDeleta = () => {
        this.display.value = this.display.value.slice(0, -1);
        this.display.focus();
    };

    //Organiza o funcionamento dos botões da calculadora, separando cada funcionalidade pelas classes
    this.cliqueTeclas = () => {
        document.addEventListener('click', (e) =>{
            const item = e.target;
            if(item.classList.contains('btn-num')){
                this.valorNumEmDisplay(item.innerText);
            }
            if(item.classList.contains('btn-delete')){
                this.valorDisplayDeleta();
            }
            if(item.classList.contains('btn-equals')){
                this.valorRealizaConta();
            }
            if(item.classList.contains('btn-clear')){
                this.valorResetaConta();
            }
        })
    };

    //Veriica a tecla pressionada
    this.pressionaEnter = () => {
        document.addEventListener('keyup', (e) =>{
            //keyCode = 13 : Enter
            //Confirma a conta e chama a realização da conta
            if(e.keyCode === 13){
                this.valorRealizaConta();
            }
            //keyCode = 27 : Esc
            //Cancela o que está no display
            if(e.keyCode === 27){
                this.valorResetaConta();
            }
        })
    }
}

//Instancio e inicializo a calculadora
const calculadora = new Calculadora();
calculadora.startaCalculadora();
