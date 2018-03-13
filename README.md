# api-express

> A API project whit ExpressJS, GrahpQL and Socket.io

Docker - Run a image alpin

    docker run -it -v /var/www:/var/www -p 4000:4000 --name express alpine

In container - Instalation

    apk add --update --upgrade git nodejs nodejs-npm && npm install -g yarn express-generator

    npm install -g nodemon
    
Create a start project
    
    mkdir api-express || cd api-express

    npm init

    npm install express express-graphql graphql --save

Mongoose for connect to MongoDB

    npm i -S mongoose

Run api server

    nodemon server.js

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
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
