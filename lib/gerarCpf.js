var random = require('./random')
  , mod = require('./mod')
  , validarCpf = require('validar-cpf')

function sumNumbers (numbers) {
  return numbers.reverse().reduce(function (a, b, i) {
    return a + (b * (i + 2))
  }, 0)
}

function gerarCPF(field) {
  var n = 9;
  var n1 = random(n);
  var n2 = random(n);
  var n3 = random(n);
  var n4 = random(n);
  var n5 = random(n);
  var n6 = random(n);
  var n7 = random(n);
  var n8 = random(n);
  var n9 = random(n);

  var numbers = [n1, n2, n3, n4, n5, n6, n7, n8, n9]

  var d1 = 11 - mod(sumNumbers(numbers), 11)

  if (d1 >= 10) {
    d1 = 0
  }

  numbers[numbers.length] = d1

  var d2 = 11 - mod(d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11, 11)

  if (d2 >= 10) {
    d2 = 0
  }

  return ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+d1+d2
}

module.exports = gerarCPF
