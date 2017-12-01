const dotenv = require('dotenv')

const isProduction = require('shared/lib/isProduction')

const dotEnvFilePath = isProduction
  ? './config/.env'
  : './config/.env.development'
dotenv.config({ path: dotEnvFilePath })

module.exports = {
  apps: [
    {
      env: {
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
