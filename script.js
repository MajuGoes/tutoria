const somarNumero = (...numeros) => {
    let soma = 0;

    for(numero of numeros) {
        soma += numero;
    }
    return soma;
}

