const dotenv = require('dotenv')

dotenv.config({ path: './config/.env.development' })

module.exports = {
  apps: [
    {
      env: {
        API_PORT: process.env.API_PORT,
        KOA_SECRET: process.env.KOA_SECRET,
        NODE_ENV: process.env.NODE_ENV,
      },
      ignore_watch: [
        'node_modules/.cache',
        'client',
        '.git',
        'nginx',
        'dist',
        'media',
      ],
      name: 'backend',
      script: './server/index.js',
    },
  ],
}
