module.exports = {
  apps: [
    {
      name: 'nextjs',
      script: './node_modules/.bin/next',
      args: 'start -p 3001 -H 0.0.0.0',
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
