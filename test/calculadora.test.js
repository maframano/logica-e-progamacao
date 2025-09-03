const { somarDoisNumero } = require('../src/calculadora');
const {expect } = require('chai');

//{
//const resultadoDaSoma = somarDoisNumero(-10, 5);
//console.log(resultadoDaSoma);
//}
//para rodar a aplicação, digitar o comando abaixo no terminal
//node tests/calculadora.test.js
//não esquecer de mudar para bash no terminal
//-----------------------------------------------------

//describe é um agrupamento de testes referente a função somarDoisNumeros
//o it é um cenario que se utiliza da função. a mesma função pode ser usada em vários
//tipos de cenarios
describe('Testes da Função de Soma', function () {
    it ('a função deve ser capaz de somar dois numeros positivos', function(){
        //coleta o resultado
            const resultadoDaSoma = somarDoisNumero(5, 3);
        //Compara o resultado com o valor que voce espera
            expect(resultadoDaSoma).to.equal(8);
    });

    it ('A função deve ser capaz de somar um numero positivo e um negativo', function(){
         
        //coleta o resultado
            const resultadoDaSoma = somarDoisNumero(50, -15);
        //Compara o resultado com o valor que voce espera
            expect(resultadoDaSoma).to.equal(35);
    });
});

//para rodar os testes, colocar no terminal npx mocha