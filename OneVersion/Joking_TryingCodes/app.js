function Main() {
    

    const form = document.querySelector('.form');
    const inputLista = document.querySelector('.input-item-lista');
    const gravar = document.querySelector('.btn-gravar');
    const lista = document.querySelector('.lista-gravada');

    function geraComponentes(container, value, geraClass) {
        const component = document.createElement(container);
        component.innerHTML = value;
        return component; 
    }

    function criaItemLista(valorItem) {
        const li = geraComponentes('li', valorItem)
        const btn = geraComponentes('button', 'Excluir');
        btn.classList.add('excluir');
        li.appendChild(btn);
        lista.appendChild(li);
        limpaInput();
        salvarItemsLista();
    }

    function limpaInput() {
        inputLista.value = '';
        inputLista.focus();
    }

    function salvarItemsLista() {
        const listaItems = lista.querySelectorAll('li');
        const itens = [];

        for (let item of listaItems) {
            let textoItem = item.innerText;
            textoItem = textoItem.replace('Excluir', '').trim();
            itens.push(textoItem);
        }

        const itensJSON = JSON.stringify(itens);
        localStorage.setItem('itens', itensJSON);
    }

    function adicionaItensSalvos() {
        const itens = localStorage.getItem('itens');
        const listaItens = JSON.parse(itens);

        for(let item of listaItens){
            criaItemLista(item);
        }
    }

    gravar.addEventListener('click', function (e) {
        if(inputLista.value){
            criaItemLista(inputLista.value)
        }
    })

    inputLista.addEventListener('keypress', function (e) {
        if(e.keyCode === 13){
            if(inputLista.value){
                criaItemLista(inputLista.value)
            }
        }
    })

    document.addEventListener('click', function (e) {
        const element = e.target;
        if(element.classList.contains('excluir')){
            element.parentElement.remove();
            salvarItemsLista();
        }
    })

    adicionaItensSalvos();
}

Main();
