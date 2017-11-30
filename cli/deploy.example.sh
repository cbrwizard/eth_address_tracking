#!/usr/bin/env bash

ssh USER@IP 'source ~/.bashrc && cd apps/shouldibuybitcoin.today && git fetch && git reset origin/master --hard && yarn && yarn run frontend:production && yarn run backend:production'
