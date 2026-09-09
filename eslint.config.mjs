import ljharb from '@ljharb/eslint-config/flat';

export default [
	...ljharb,
	{
		rules: {
			'func-name-matching': 'warn',
			'func-style': ['error', 'declaration'],
			'new-cap': [
				'error', {
					capIsNewExceptions: [
						'Call',
						'NewPromiseCapability',
						'PromiseResolve',
						'Type',
					],
				},
			],
		},
	},
	{
		files: ['test/**'],
		rules: {
			'max-lines-per-function': 'off',
			'no-invalid-this': 'warn',
			'prefer-promise-reject-errors': 'off',
		},
	},
];
