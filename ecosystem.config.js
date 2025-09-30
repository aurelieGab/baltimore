module.exports = {
  apps: [
    {
      name: 'nextjs',
      script: 'npm',
      args: 'run start',
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
    },
  ],
};
