// coloca (n % 2 == 0) se houver sobra maior que zero sabe que é ímpar.
function parimp(n) {
    if (n % 2 == 0) {
        return "Par!"
    } else {
        return 'Impar!'
    }
}

console.log(parimp(4))