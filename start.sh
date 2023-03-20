#!/bin/bash

# Start the back-end server
./gradlew bootRun --args='--spring.profiles.active=local' &
cd src/main/frontend

# Start the front-end server
npm start
BACKEND_PID=$!


echo "$BACKEND_PID" + " pid 제거"
kill $BACKEND_PID


