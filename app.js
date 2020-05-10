const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const apiSchema = require('./api/schema/index');
const apiResolvers = require('./api/resolvers/index');
const isAuth = require('./middleware/is-auth');

const app = express();

app.use(bodyParser.json());

app.use(isAuth);

app.use(
    '/api',
    graphqlHttp({
        schema: apiSchema,
        rootValue: apiResolvers,
        graphiql: true
    })
);

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
        process.env.MONGO_PASSWORD
    }@cluster0-jjp12.gcp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
).then(() => {
    app.listen(3000);
}).catch(err => {
    console.log(err);
});
