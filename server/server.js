const express = require('express');
const morgan = require('morgan');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schemaGraphql/schema');
const app = express();
app.use(morgan('dev'));
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(2222, () => console.log('server started'));