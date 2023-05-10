# express-graphql-server
Express GraphQL Server


To run JSON Server (The server will run by default on http://localhost:3000/):
```bash
npm run json-server
```



To run Express GraphQL Server (The server will run by default on http://localhost:5000/graphql):
```bash
npm run gql-server
```

To test Express GraphQL Server, use the following example:
```
{
  department(id: "2") {
    name
    description
    employees {
      id
      firstName
      age
      address
    }
  }
}

```
