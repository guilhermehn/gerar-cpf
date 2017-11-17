const assert = require('assert')
const validarCpf = require('validar-cpf')
const gerarCpf = require('../')

describe('gerar-cpf', () => {
	const cpfs = []

	for (let i = 0; i < 99; i++) {
		cpfs[i] = gerarCpf()
	}

	cpfs.forEach(cpf => {
		it('should generate valid cpf', () => {
			assert(validarCpf(cpf))
		})
	})

	describe('mask argument', () => {
		it('should output a masked cpf if true is passed', () => {
			assert(/\d{3}\.\d{3}\.\d{3}-\d{2}/.test(gerarCpf(true)))
		})

		it('should accept a mask argument', () => {
			assert(/\d{4}\.\d{4}\.\d{3}/.test(gerarCpf('xxxx.xxxx.xxx')))
		})

		it('should throw an error if the mask contains less than 11 placeholders', () => {
			assert.throws(gerarCpf.bind(null, 'xxxxxxxxxx'))
		})

		it('should accept a placeholder argument', () => {
			assert(
				/\d{3}x\d{3}x\d{3}x\d{2}/.test(gerarCpf('kkkxkkkxkkkxkk', 'k'))
			)
			assert(
				/\d{3}x\d{3}x\d{3}x\d{2}/.test(gerarCpf('___x___x___x__', '_'))
			)
			assert(
				/\d{3} \d{3} \d{3} \d{2}/.test(gerarCpf('kkk kkk kkk kk', 'k'))
			)
			assert(
				/\d{3} \d{3} \d{3} \d{2}/.test(gerarCpf('kkk kkk kkk kk', 'k'))
			)
			assert(
				/\d{3} \d{3} \d{3} \d{2}/.test(
					gerarCpf('<><><> <><><> <><><> <><>', '<>')
				)
			)
		})
	})
})
