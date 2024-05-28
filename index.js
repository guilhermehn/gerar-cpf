/**
 * @param {number} x
 **/
const rng = (x) => Math.round(Math.random() * x);

/**
 * @param {number} x
 * @param {number} y
 **/
const mod = (x, y) => Math.round(x - Math.floor(x / y) * y);

/**
 * @param {number[]} xs
 */
const sumNumbers = (xs) =>
	xs
		.slice()
		.reverse()
		.reduce((acc, a, b) => acc + a * (b + 2), 0);

/**
 * Generate random Brazilian CPF document numbers.
 * @param {String} [mask] - Mask to be used in the resulting string.
 * @param {String} [placeholder='x'] - Character to be replaced by numbers in the mask.
 * @return {String} A CPF document number in string format.
 * @example
 * gerarCPF()
 * @example <caption>Using masks</caption>
 * gerarCPF('xxx.xxx.xxx-xx')
 * @example <caption>Using mask placeholder</caption>
 * gerarCPF('___.___.___-__', '_')
 */
const gerarCPF = (mask, placeholder = 'x') => {
	const numbers = [];

	while (numbers.length < 9) {
		numbers[numbers.length] = rng(9);
	}

	while (numbers.length < 11) {
		let last = 11 - mod(sumNumbers(numbers), 11);

		if (last > 9) {
			last = 0;
		}

		numbers[numbers.length] = last;
	}

	if (!mask) {
		return numbers.join('');
	}

	if (mask.match(new RegExp(placeholder, 'g')).length < 11) {
		throw new Error('The CPF mask should contain 11 placeholders');
	}

	let result = mask;
	const placeholderRegex = new RegExp(placeholder);

	for (let i = 0; i < 11; i++) {
		result = result.replace(placeholderRegex, numbers[i]);
	}

	return result;
};

module.exports = gerarCPF;
