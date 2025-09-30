module.exports = {
  apps: [
    {
      name: "nextjs",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        // Next.js écoutera automatiquement la variable PORT
        PORT: 3001, 
      },
      // Changez "fork" pour "cluster"
      exec_mode: "cluster",
      // Optionnel mais recommandé : spécifiez le nombre d'instances
      // -1 signifie autant d'instances que de cœurs CPU
      instances: "max", 
    },
  ],
};