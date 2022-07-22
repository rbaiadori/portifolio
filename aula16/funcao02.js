//parâmetros opcionais (n1=0, n2=0)
function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}
console.log(soma(2, 5))
console.log(soma(7, 3))
console.log(soma(2)) // considera o 0 que foi colocado como opcional, para não dar NaN.