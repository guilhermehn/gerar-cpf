/**
 * @param {number} x
 **/
const rng = (x) => Math.round(Math.random() * x);

/**
 * @param {number[]} xs
 * @returns {number}
 */
const sum = (xs) =>
	xs
		.slice()
		.reverse()
		.reduce((acc, a, b) => acc + a * (b + 2), 0);

/**
 * Generate random Brazilian CPF document numbers.
 * @param {String} [mask] - Mask to be used in the resulting string.
 * @param {String} [placeholder=x] - Character to be replaced by numbers in the mask.
 * @return {String} A CPF document number in string format.
 * @example
 * gerarCPF()
 * @example <caption>Using masks</caption>
 * gerarCPF('xxx.xxx.xxx-xx')
 * @example <caption>Using mask placeholder</caption>
 * gerarCPF('___.___.___-__', '_')
 */
module.exports = function gerarCPF(mask, placeholder = 'x') {
	const numbers = [];

	while (numbers.length < 9) {
		numbers.push(rng(9));
	}

	while (numbers.length < 11) {
		/** @type {number} */
		const last = 11 - (sum(numbers) % 11);
		numbers.push(last > 9 ? 0 : last);
	}

	if (!mask) {
		return numbers.join('');
	}

	const placeholders = mask.match(new RegExp(placeholder, 'g'));
	if (!placeholders || placeholders.length < 11) {
		throw new Error('The CPF mask should contain 11 placeholders');
	}

	const placeholderRegex = new RegExp(placeholder);
	let result = mask;

	for (let i = 0; i < 11; i++) {
		result = result.replace(placeholderRegex, numbers[i].toString());
	}

	return result;
};
