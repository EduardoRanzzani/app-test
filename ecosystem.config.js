module.exports = {
	apps: [
		{
			name: 'portal-icc',
			script: 'server.js',
			cwd: '/app',
			exec_mode: 'fork',
			instances: 1,
			env: {
				PORT: 3000,
				NODE_ENV: 'production',
			},
		},
	],
};
