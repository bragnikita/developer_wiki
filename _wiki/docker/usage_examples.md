---
title: Docker usage examples
categories: docker
---
# Running test

## rspec

Set the application directory as a volume in docker-compose file
```
web:
  volumes:
    - .:/app

```
start it with `docker-compose up` and launch test with the command:
```
docker-compose run web bundle exec rspec -f d -p **/post*.rb
```
