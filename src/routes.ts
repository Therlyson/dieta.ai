import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify';
import { CreateNutritionController } from './controllers/CreateNutritionController';


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    
    fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => { //mapeando rota
        let resultText = "```json\n{\n  \"nome\": \"Lucas Oliveira\",\n  \"sexo\": \"masculino\",\n  \"idade\": 28,\n  \"altura\": 1.78,\n  \"peso\": 75,\n  \"objetivo\": \"hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Café da manhã\",\n      \"alimentos\": [\n        \"2 fatias de pão integral\",\n        \"2 ovos mexidos\",\n        \"1 banana\",\n        \"1 copo de leite desnatado\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da manhã\",\n        \"alimentos\": [\n          \"1 scoop de whey protein\",\n          \"1 maça\"\n        ]\n    },\n    {\n      \"horario\": \"12:00\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"1 xícara de arroz integral\",\n        \"1 xícara de brócolis\",\n        \"1 batata doce média\"\n      ]\n    },\n    {\n      \"horario\": \"15:00\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"1 pote de iogurte grego\",\n        \"1 colher de sopa de granola\"\n      ]\n    },\n    {\n      \"horario\": \"18:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe assado\",\n        \"1 xícara de quinoa\",\n        \"1 xícara de espinafre\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche da noite\",\n      \"alimentos\": [\n        \"1 scoop de caseína\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"whey protein\",\n    \"creatina\",\n    \"BCAA\",\n    \"glutamina\"\n  ]\n}\n```\n"

        try{
            //extraindo o JSON
            let jsonString = resultText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();
            let jsonObject = JSON.parse(jsonString)

            return reply.send({ data: jsonObject });   
        }catch(err){
            console.log(err);
        }
        reply.send({ ok : true });
    });


    fastify.post('/create', async (request: FastifyRequest, reply: FastifyReply) => {
        const result = await new CreateNutritionController().handle(request, reply);
        return reply.status(201).send(result);
    });
}