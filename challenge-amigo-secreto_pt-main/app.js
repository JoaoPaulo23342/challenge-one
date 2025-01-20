let nomes = []

const inputNome = document.querySelector('#amigo')
const paragrafo = document.querySelector('#paragrafo')
const resultado = document.querySelector('#resultado')
function adicionar() {
    
    let valor = inputNome.value
    if(valor === '') {
        alert('Digite um nome valido')
        return;
    }

    nomes.push(valor)

    inputNome.value = ''

    console.log(nomes)
    

}

function adicionarAmigo() {
    
    adicionar()
    paragrafo.innerHTML = nomes.join('<br>')
}

function sortearAmigo() {
    if (nomes.length === 0) {
        resultado.innerHTML = 'Nenhum amigo foi adicionado ainda!';
        return; 
    }

    let indiceAleatorio = Math.floor(Math.random() * nomes.length);
    let nomeSorteado = nomes[indiceAleatorio]; 
    resultado.innerHTML = `O nome sorteado foi: ${nomeSorteado}`; 
}

function limpar() {
    
    nomes = [];
    paragrafo.innerHTML = '';
    resultado.innerHTML = '';
}
