function Main(){
    const formIMC = document.querySelector('.formIMC')
    const peso = document.querySelector('.peso');
    const altura = document.querySelector('.altura');
    const textoFinal = document.querySelector('.resultado');
    const mostraData = document.querySelector('.mostraData');
    const objData = new Date();
    const elementosforElement = [
        {tag: 'p', texto: 'Texto 1'},
        {tag: 'div', texto: 'Texto 2'},
        {tag: 'footer', texto: 'Texto 3'},
        {tag: 'section', texto: 'Texto 4'}
    ];
    const forElement = document.querySelector('.forElement');
    const pForElement = forElement.querySelectorAll('p');
    const cssBody = getComputedStyle(document.body);
    const backgroundColorBody = cssBody.backgroundColor;
    
    const diaSemana = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 
    'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado');

    const mesAtual = new Array("janeiro", "fevereiro", "março", "abril", 
    "maio", "junho", "agosto", "outubro", "novembro", "dezembro");

    function validarValores(peso, altura){
        if(!Number(peso)){
            return 'Peso inválido!'
        }
        else if(!Number(altura)){
            return 'Altura inválida!'
        }
        else{
            return 'Sucesso'
        }
    }
    function clacularIMC(peso, altura){
        const resultado = Number(peso / (altura * altura));
        return resultado.toFixed(2);
    }

    function verificarIMC(valor){
        if(valor < 18.5) return 'Abaixo do peso';
        else if(valor <= 24.9) return 'Peso normal';
        else if(valor <= 29.9) return 'Sobrepeso';
        else if(valor <= 34.9) return 'Obesidade grau 1';
        else if(valor <= 39.9) return 'Obesidade grau 2';
        else if(valor >= 40) return 'Obesidade grau 3';
    }

    function gerarMensagem(mensagem, valido){
        textoFinal.innerHTML = ''
        const p = document.createElement('p');
        if(valido){
            p.classList.add('good-request')
        }else{
            p.classList.add('bad-request')
        }
        p.innerHTML = mensagem;
        textoFinal.appendChild(p);
    }

    function botaoCalculaIMC(e){
        e.preventDefault();
        const valoresValidados = validarValores(peso.value, altura.value);
        console.log(valoresValidados)
        if(valoresValidados !== 'Sucesso'){
            gerarMensagem(valoresValidados, false)
        }
        else{
            const valor = clacularIMC(peso.value, altura.value);
            const resultado = verificarIMC(valor);
            const textoResultado = `Seu IMC é ${valor} (${resultado})`
            gerarMensagem(textoResultado, true)
        }
    }
    function retornaValorData (value){
        return value >= 10 ? value: '0' + value
    }
    function geraElementos(elemento) {
        return document.createElement(elemento);
    }
    function mostrarHoras(){
        const dataHora = document.createElement('p');
            //DD = retornaValorData(objData.getDate());
            //dia = diaSemana[objData.getDay()];
            //MM = mesAtual[objData.getMonth()];
            //yyyy = objData.getFullYear();
            //hh = retornaValorData(objData.getHours());
            //mm = retornaValorData(objData.getMinutes());
            //dataHora.innerHTML = `${dia}, ${DD} de ${MM} de ${yyyy}. ${hh}:${mm}`;
        dataHora.classList.add('data-hora');
        dataHora.innerHTML = objData.toLocaleDateString('pt-BR', {dateStyle: 'full'});
        
        mostraData.appendChild(dataHora);
    }

    //For para a criação a implementação de texto em tempo de execução.
    for (const element of elementosforElement) {
        console.log(element.tag, element.texto);
        elementoAtual = geraElementos(element.tag);
        elementoAtual.innerHTML = element.texto;
        forElement.appendChild(elementoAtual);
    }

    for (let p of pForElement){
        p.style.backgroundColor = backgroundColorBody;
        p.style.color = '#FFF';
    }

    //rotina para demonstrar as horas que o cliente entrou no site.
    mostrarHoras();

    //chamar rotina principal sobre o calculo de IMC.
    formIMC.addEventListener('submit', botaoCalculaIMC);
}
Main();

//IMC = (peso/altura²)
/*
<p>Menos do que 18,5</p>      <p>Abaixo do peso</p>                               
<p>Entre 18,5 e 25,9</p>      <p>Peso normal</p>              
<p>Entre 25 e 29,9</p>        <p>Sobrepeso</p>         
<p>Entre 30 e 34,9</p>        <p>Obesidade grau 1</p>         
<p>Entre 35 e 39,9</p>        <p>Obesidade grau 2</p>         
<p>Mais do que 40</p>         <p>Obesidade grau 3</p>   
*/    