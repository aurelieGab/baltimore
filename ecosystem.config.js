module.exports = {
  apps: [
    {
      name: "nextjs",
      // On pointe directement vers l'exécutable de Next.js
      script: "./node_modules/next/dist/bin/next",
      // On lui passe l'argument "start"
      args: "start",
      exec_mode: "cluster",
      instances: "max",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
      },
    },
  ],
};