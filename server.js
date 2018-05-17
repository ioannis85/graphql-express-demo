import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';


// se inicializa la app de express
const app = express();

// endpoint que  sirve para realizar las consultas con graphql

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));


//app.use('/graphql', graphqlExpress());


app.listen(8000, () => {

  

});