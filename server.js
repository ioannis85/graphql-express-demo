import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './schema.js';


// se inicializa la app de express
const app = express();

// endpoint que  sirve para realizar las consultas con graphql

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));


app.use('/graphql',bodyParser.json(),graphqlExpress({schema }));


app.listen(8000, () => {



});
