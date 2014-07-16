var random = require('./random')
  , mod = require('./mod')
  , validarCpf = require('validar-cpf')
  , sumNumbers = require('./sumNumbers')

function gerarCPF(field) {
  var numbers = []
    , last

  while (numbers.length < 9) {
    numbers[numbers.length] = random(9)
  }

  while (numbers.length < 11) {
    var last = 11 - mod(sumNumbers(numbers), 11)

    if (last >= 10) {
      last = 0
    }

    numbers[numbers.length] = last
  }

  return numbers.join('')
}

module.exports = gerarCPF
