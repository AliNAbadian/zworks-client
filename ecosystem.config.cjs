module.exports = {
  apps: [
    {
      name: "mars-agency",
      cwd: "/var/www/mars-agency",
      script: "server.js",
      interpreter: "node",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "127.0.0.1",
      },
    },
  ],
};
