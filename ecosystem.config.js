module.exports = {
  apps: [
    {
      name: "nextjs",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
      },
      exec_mode: "fork"
    },
  ],
};
