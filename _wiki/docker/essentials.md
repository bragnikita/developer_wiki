---
title: Docker essentials
categories: docker
keywords: docker, devops
---
# Docker
## Basic defenitions
*Image* - executable package, like distributive.  
Image is building with the `build` command basing on `Dockerfile`.   
We can list all downloaded or built images with `docker image ls`  

Running the image with `docker run <image name>` cause downloading the image (if necessary) and launching of new container.

*Container* is launching by running an *image*. It is a runtime instance of an image.   
Listing of the running containers: `docker ps`.
Listing of all containers (including stopped) : `docker container ls --all`  

## Dockerfile
file: `Dockerfile`  
comment: `# ...`, line continuation: `long-long-command \ `  
`FROM <image_name>`  setup base image  
`WORKDIR <dir inside the container>` setup working dir for commands executed later  
`ADD <host dir> <container dir>` copy content  
`RUN <command>` run command  
`EXPOSE <port>` make port available to the world outside   
`ENV <name> <val>` define env variable  
`CMD [ <comma separated list of command and arguments>]` run this command when container launches  

Building new image: `docker build -t <name of image> <dir where Dockerfile is>`  
Running (launching a container): `docker run -p <local port>:<container exposing port> <name of image>`  
Stopping: `docker container stop <container id>`
Remove specified container: `docker container rm <hash>`  
Remove specified image: `docker image rm <image id>`

### Differences between ENTRYPOINT and CMD
Any command linke arguments passed to `docker run <image>` will be executed after the entrypoint and will override all elements, specified using *CMD*.  
`ENTRYPOINT` sets the command and parameters that will be executed first when a container is run. All parameters, passed to `docker run <image>` will be attached after parameters of those specified with `ENTRYPOINT`. In that case default parameters, than were set by `CMD` directive, are ignored.  
```
ENTRYPOINT ["executable", "param1", "param2"]
ENTRYPOINT [ "sh", "-c", "echo $HOME" ]

COPY ./docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["postgres"]
```
`CMD/command` provide defaults when executing a container. If you ran `docker run <image>`, then the commands and parameters, specified by `CMD/command` would be executed.  
If an `ENTRYPOINT` is set, then commands, specified by a `CMD`, executes after those specified by `ENTRYPOINT`.  
If you omit the executable in a `CMD` instruction, then you must specify an `ENTRYPOINT`.
```
CMD ["executable","param1","param2"]
CMD ["param1","param2"]
```
To run new container, ignore its entrypoint and attach to it's shell:  
```
docker run -it --entrypoint=/bin/bash <image name> -i
```
#### Differences between run, start and exec
`run` **creates new** container, using specified image: `docker run [--name <container name>] <image> [<command> <args>]`  
`exec` **connects** to the **currently running** container and runs a command in it: `docker exec <container id or name> <command> <args>`  
`start/restart` **starts** one or more **stopped** containers: `docker start <containers names>`

#Docker Compose
## Basic defenitions
Compose is a tool for defining an running multi-container Docker apps. We can start or stop all necessary containers with only one `docker-compose up` command.  
Common use cases:
* Dev environment
* Automated testing environment
* single host deployment (Docker Machine or Docker Swarm)
## docker-compose.yml
```yml
version: "3"
services:
  web:
    build: .
    ports:
      - "4000:80"
    volumes:
      - .:/app
    links:
      - db
    depends_on:
      - db
  db:
    image: mysql
```
