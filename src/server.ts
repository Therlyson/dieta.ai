import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import { routes } from './routes';


const app = Fastify({ logger: true }); //initialize e create api
dotenv.config(); //initialize if you have variables environment

app.setErrorHandler((error, request, reply) => {   //if you have an error in API, it will return a message
    reply.code(400).send({ message: error.message });
});

const start = async () => {
    app.register(cors); //deixando liberado para qualquer IP/url fazer requisição
    app.register(routes);

    try {
        await app.listen({port: 3333, host: "0.0.0.0"})
        console.log('Server running at http://localhost:3333');
    } catch (err) {
        console.log(err);
    }
}

start(); 