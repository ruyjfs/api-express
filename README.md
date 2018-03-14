# api-express

> A API project whit ExpressJS, GrahpQL and Socket.io

Docker - Run a image alpin

    docker run -it -v /var/www:/var/www -p 4000:4000 --name express alpine

In container - Instalation

    apk add --update --upgrade git nodejs nodejs-npm && npm i -g nodemon express-generator

To create a start project
    
    mkdir api-express || cd api-express

    npm init

    npm i express express-graphql graphql mongoose --save

Docker MongoDB

    docker run  -p 27017:27017 --name mongo -d mongo --auth

Create user in db

    docker exec -it mongo mongo admin

    db.createUser({ user: 'admin', pwd: '123456', roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] });

Connect to db
    docker run -it --rm --link some-mongo:mongo mongo mongo -u jsmith -p some-initial-password --authenticationDatabase admin some-mongo/some-db

## Build Setup

``` bash
# install dependencies
npm i

# serve with hot reload at localhost:8080
nodemon index.js
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
