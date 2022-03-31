/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (myName, age) => {
  if (myName === undefined || age === undefined) {
    return undefined;
  }
  let returnString = `Oi, meu nome é ${myName}!
Tenho ${age} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  return returnString;
};

module.exports = vqv;
