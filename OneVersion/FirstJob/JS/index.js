function Main (){
    const formBasico = document.querySelector('.formBasico');
    const resultados = document.querySelector('.resultados');
    const cadastrados = [];
    

    function salvaPessoa(nomePessoa, sobrenomePessoa, pesoPessoa, alturaPessoa){
        const pessoa = {
            nome: nomePessoa,
            sobrenome: sobrenomePessoa,
            peso: pesoPessoa,
            altura: alturaPessoa
        };
        cadastrados.push(pessoa);
    }

    function cadPessoa(evento){
        evento.preventDefault();
        
        const nome = formBasico.querySelector('.nome');
        const sobrenome = formBasico.querySelector('.sobrenome');
        const peso = formBasico.querySelector('.peso');
        const altura = formBasico.querySelector('.altura');

        salvaPessoa(nome.value,sobrenome.value,peso.value,altura.value);

        resultados.innerHTML += 
            `<p>
                Nome: ${nome.value}</br>Sobrenome: ${sobrenome.value}</br>Peso: ${peso.value}</br>Altura: ${altura.value}
                </br>--------------------------------------------
            </p>`;
    }
    formBasico.addEventListener('submit', cadPessoa);
}

Main()

/*
    <form action="" class="formBasico" method="GET">
      <p>Nome: <input type="text" class="nome"> </p>
      <p>Sobrenome: <input type="text" class="sobrenome"> </p>
      <p>Peso: <input type="text" class="peso"> </p>
      <p>Altura: <input type="text" class="altura"> </p>
      <button>Enviar!</button>
    </form>
    <div class="resultados">
      
    </div>
*/