var expressao = "";
var visor = document.getElementById("visor");
var ultimoFoiOperador = false;
var pontoUsado = false;

function clicar(valor) {
  var operadores = ['+', '-', '*', '/'];

  if (valor === '.') {
    if (pontoUsado) {
      return;
    }

    if (expressao === "" || ultimoFoiOperador) {
      expressao += "0.";
    } else {
      expressao += ".";
    }

    pontoUsado = true;
    ultimoFoiOperador = false;
  }

  else if (operadores.indexOf(valor) !== -1) {
    if (expressao === "" || ultimoFoiOperador) {
      return;
    }

    expressao += valor;
    ultimoFoiOperador = true;
    pontoUsado = false;
  }

  else {
    if (visor.innerText === "0" || expressao === "") {
      expressao = valor;
    } else {
      expressao += valor;
    }
    ultimoFoiOperador = false;
  }

  visor.innerText = expressao;
}

function limpar() {
  expressao = "";
  visor.innerText = "0";
  ultimoFoiOperador = false;
  pontoUsado = false;
}

function calcular() {
  var ultimoChar = expressao.charAt(expressao.length - 1);
  var operadores = ['+', '-', '*', '/'];

  if (operadores.indexOf(ultimoChar) !== -1) {
    expressao = expressao.slice(0, -1);
  }

  if (expressao !== "") {
    var resultado = eval(expressao);
    visor.innerText = resultado;
    expressao = resultado.toString();

    if (expressao.indexOf('.') !== -1) {
      pontoUsado = true;
    } else {
      pontoUsado = false;
    }

    ultimoFoiOperador = false;
  } else {
    visor.innerText = "0";
  }
}
