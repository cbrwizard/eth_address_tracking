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
        DB_URL: process.env.DB_URL,
        KOA_SECRET: process.env.KOA_SECRET,
        NODE_ENV: process.env.NODE_ENV,
        REDIS_HOST: process.env.REDIS_HOST,
        SENTRY_PROJECT_ID: process.env.SENTRY_PROJECT_ID,
        SENTRY_PUBLIC_KEY: process.env.SENTRY_PUBLIC_KEY,
        SENTRY_SECRET_KEY: process.env.SENTRY_SECRET_KEY,
        TWITTER_LINK: process.env.TWITTER_LINK,
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
