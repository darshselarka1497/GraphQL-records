import express from 'express';
import resolvers from './resolvers';
import schema from './schema';
import {graphqlHTTP} from 'express-graphql';

const app = express();

app.get("/", (req, res) => {
    res.send("working graphql")
})

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql:true
}))
const port = 8000;

app.listen(port, () => console.log("Running at "+port));