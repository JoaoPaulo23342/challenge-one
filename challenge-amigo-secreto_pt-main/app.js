let nomes = []

const inputNome = document.querySelector('#amigo')
const paragrafo = document.querySelector('#paragrafo')
function adicionar() {
    
    let valor = inputNome.value
    nomes.push(valor)

    inputNome.value = ''

    console.log(nomes)
    

}

function adicionarAmigo() {
    adicionar()
    paragrafo.innerHTML = nomes.join('<br>')
}
