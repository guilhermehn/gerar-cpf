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
		it('should not output a masked cpf by default', () => {
			assert(/\d{11}/.test(gerarCpf()))
		})

		it('should accept a mask argument', () => {
			assert(/\d{4}\.\d{4}\.\d{3}/.test(gerarCpf('xxxx.xxxx.xxx')))
		})

		it('should throw an error if the mask contains less than 11 placeholders', () => {
			assert.throws(gerarCpf.bind(null, 'xxxxxxxxxx'))
		})

		it('should accept a placeholder argument', () => {
			assert(
				/\d{3}b\d{3}b\d{3}b\d{2}/.test(gerarCpf('aaabaaabaaabaa', 'a'))
			)
			assert(
				/\d{3}.\d{3}.\d{3}-\d{2}/.test(
					gerarCpf('(___.___.___-__)', '_')
				)
			)
			assert(
				/\d{3} \d{3} \d{3} \d{2}/.test(gerarCpf('nnn nnn nnn nn', 'n'))
			)
			assert(
				/\d{3} \d{3} \d{3} \d{2}/.test(gerarCpf('nnn nnn nnn nn', 'n'))
			)
			assert(
				/\d{3} \d{3} \d{3} \d{2}/.test(
					gerarCpf('<><><> <><><> <><><> <><>', '<>')
				)
			)
		})
	})
})
