const menorValor = 1
const maiorValor = 500 
const numeroSecreto = gerarNumeroAleatorio()

//   Retorna/Gera um valor aleatorio da const maiorValor, ou seja, até 500
 function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
 }

 console.log('Número Secreto:', numeroSecreto)

//  Modifica o conteúdo HTML especificado
 const elementoMenorValor = document.getElementById("menor-valor")
 elementoMenorValor.innerHTML = menorValor

 const elementoMaiorValor = document.getElementById("maior-valor")
 elementoMaiorValor.innerHTML = maiorValor