---
category: receipt
---
`Dockerfile`
```
FROM 'ruby:2.5'

RUN apt-get update -qq
RUN apt-get install -y build-essential libpq-dev

ARG RAILS_ENV=docker-test

RUN mkdir /app
WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install
COPY . /app
```
`docker-compose.yml`
```
version: "3"
services:
  web:
    build: .
    environment:
      RAILS_ENV: "docker-test"
    command: "./docker-starter.sh"
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    links:
      - db
    depends_on:
      - db
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: "test-db"
      MYSQL_USER: "test-user"
      MYSQL_PASSWORD: password
```

`docker-starter.sh`  
```
#!/usr/bin/env bash

bundle check || bundle install
bundle exec rails db:migrate
bundle exec rspec --fail-fast --format d
```
Launching the startup script  
```
docker-compose build
docker-compose run web
```
