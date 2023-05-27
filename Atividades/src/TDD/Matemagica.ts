export class Matemagica {

  soma(a, b) {

    if (typeof a !== "string" || typeof b !== "number") {
      return "voce so pode realizar somas com valores numericos";
    } 
      else {
        return a + b;
    }
  }

  Subtração(a: number, b) {

    if (typeof a !== "string" || typeof b !== "number") {
      return "voce so pode realizar subtracoes com valores numericos";
    }
      else {
        return a - b;
    }
  }

  Divisao(a: number, b) {

    if (typeof a !== "string" || typeof b !== "number") {
      return "voce so pode realizar divisoes com valores numericos";
    } 
      else {
        return a / b;
    }
  }

  Multiplicacao(a: number, b) {

    if (typeof a !== "string" || typeof b !== "number") {
      return "voce so pode realizar muiltiplicacoes com valores numericos";
    } 
      else {
        return a * b;
    }
  }
}


