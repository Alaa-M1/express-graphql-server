const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const schema = require("./schema/schema");
const cors = require("cors");
const baseUrl = require("./utils/constants.ts");

const serverApp = express();

var corsOptions = {
  origin: baseUrl,
  optionsSuccessStatus: 200
};

serverApp.use(
  "/graphql",
  cors(corsOptions),
  createHandler({
    schema,
  })
);
serverApp.listen(5000, () => {
  console.log("The server is listening...");
});
