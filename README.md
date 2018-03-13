# api-express

> A API project whit ExpressJS, GrahpQL and Socket.io

Docker

    docker run -it -v /var/www:/var/www --name express -p 80:8080 alpine

In container

    apk add --update --upgrade git nodejs nodejs-npm && npm install -g yarn express-generator
    
Create a start project
    
    npm install express express-graphql graphql --save

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
