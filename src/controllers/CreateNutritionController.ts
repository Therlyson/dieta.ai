import { FastifyReply, FastifyRequest } from "fastify";
import { CreateNutritionService } from "../services/CreateNutritionService";
import { DataProps } from "../interfaces/DataProps";

export class CreateNutritionController{
    
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {name, weight, height, age, gender, objective, level} = request.body as DataProps;

        const createNutrition = new CreateNutritionService();

        const nutrition = await createNutrition.execute(
            {name, weight, height, age, gender, objective, level}
        );

        reply.send(nutrition);
    }
}