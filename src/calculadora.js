function somarDoisNumero(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros(valor1, valor2){
// 1.Soma todos os valores
    const resultadoDaSomaDeDoisValores = somarDoisNumero(valor1, valor2);
// 2. Divide pela quantidade de numeros passados    
    const mediaDeDoisValores = resultadoDaSomaDeDoisValores / 2;
// 3. Retorna a media     
    return mediaDeDoisValores;
}

module.exports = {
    somarDoisNumero
}