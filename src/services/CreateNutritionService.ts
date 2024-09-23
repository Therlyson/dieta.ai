import { DataProps } from "../interfaces/DataProps";
import { GoogleGenerativeAI } from '@google/generative-ai';

export class CreateNutritionService{
    async execute({name, weight, height, age, gender, ohjective, level}: DataProps){

        try{
            const genAI = new GoogleGenerativeAI(process.env.API_KEY!);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

            const prompt = "Quem é o cirador do Naruto?";
            const result = await model.generateContent(prompt);

            console.log(JSON.stringify(result, null, 2));
            return{ok:true};
        }catch(err){
            console.log("Error JSON: ", err);
            throw new Error("Failed create.");
        }
    }
}