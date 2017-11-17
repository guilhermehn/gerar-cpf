'use strict'

const random = require('./lib/random')
const mod = require('./lib/mod')
const sumNumbers = require('./lib/sumNumbers')

const DEFAULT_MASK = 'xxx.xxx.xxx-xx'
const DEFAULT_PLACEHOLDER = 'x'

function gerarCPF(mask, placeholder) {
	const numbers = []

	while (numbers.length < 9) {
		numbers[numbers.length] = random(9)
	}

	while (numbers.length < 11) {
		let last = 11 - mod(sumNumbers(numbers), 11)

		if (last >= 10) {
			last = 0
		}

		numbers[numbers.length] = last
	}

	const result = numbers.join('')

	if (typeof mask === 'boolean' && mask) {
		mask = DEFAULT_MASK
	}

	if (mask && mask.length) {
		if (typeof placeholder === 'undefined') {
			placeholder = DEFAULT_PLACEHOLDER
		}

		if (mask.match(new RegExp(placeholder, 'g')).length < 11) {
			throw new Error('The CPF mask should contain 11 placeholders')
		}

		const placeholderRegex = new RegExp(placeholder)
		let i = -1
		while (++i < 11) {
			mask = mask.replace(placeholderRegex, result[i])
		}

		return mask
	}

	return result
}

module.exports = gerarCPF
