#!/usr/bin/env bash

echo 'started backing up' &&
/usr/bin/mongodump -o LOCAL_PATH_TO_APP/tmp/backups/production/$(date +%Y-%m-%d) -d production --gzip --port MONGO_PORT -u MONGO_USER -p MONGO_PASS --authenticationDatabase admin &&
/usr/bin/aws s3 cp LOCAL_PATH_TO_APP/tmp/backups/production/ s3://S3_PATH_TO_BACKUPS_FOLDER/ --recursive &&
echo 'ran backup'
