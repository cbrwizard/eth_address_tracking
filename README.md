# What

A simple website which answers a single question: should you buy bitcoin today or not? Powered by crowdsourcing.

# How to set up

1. Copy `.env.development.example` to `.env.development`, fill the data there.
2. Copy `backup.example.sh` to `backup.sh`, fill the data there.
3. Copy `mongod.example.conf` to `mongod.conf`, fill the data there.

# How to dev

1. `yarn`
2. `yarn run frontend:dev`
3. `yarn run db:dev`
4. `yarn run backend:dev`
