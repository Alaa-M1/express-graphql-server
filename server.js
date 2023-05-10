const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const schema=require('./schema/schema');
const expressGraphQL=require("express-graphql");
const serverApp = express();
serverApp.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true,
}))
serverApp.listen(5000, () => {
  console.log("The server is listening...");
});
