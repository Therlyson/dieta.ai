import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify';


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => { //mapeando rota
        console.log('Rota chamada!!!');

        reply.send({ ok : true });
    });
}