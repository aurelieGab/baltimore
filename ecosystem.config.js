module.exports = {
  apps: [
    {
      name: "nextjs",
      script: "./node_modules/next/dist/bin/next",
      // On passe le port directement en argument pour être sûr
      args: "start -p 3001", 
      exec_mode: "cluster",
      instances: "max",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};