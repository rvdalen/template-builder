module.exports = {
	plugins: ['@babel/plugin-syntax-dynamic-import'],
	presets: [
		[
			'@babel/preset-env',
			{
				"modules": false
			}
		]
	],
	env: {
		test: {
			presets: [
				[
					"@babel/preset-env",
					{
						"targets": {
							"node": "current"
						}
					}
				]
			]
		}
	}
}
