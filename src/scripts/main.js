const n1 = document.getElementById('numero1')
const n2 = document.getElementById('numero2')
const resultado = document.getElementById('resposta')

document.getElementById('botao').addEventListener('click', function() {
    resultado.innerText = parseInt(n1.value) + parseInt(n1.value)
})