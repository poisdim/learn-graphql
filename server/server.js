const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schemaGraphql/schema');
const cors = require('cors');
const app = express();
mongoose.connect("mongodb://localhost/new-graphql-react"
).then(() => console.log('connect to db'))
    .catch(e => console.log(e));

app.use(cors());
app.use(morgan('dev'));
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(2222, () => console.log('server started'));