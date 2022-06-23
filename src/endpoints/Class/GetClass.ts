import { Request, Response } from "express";
import connection from "../../data/connetion";


export const GetClass = async (req: Request, res: Response):Promise<any> =>{
    let errorCode = 400

    try {

        const {result} = req.query

        const response = await connection("Turma")

        if(result){
            const response = await connection("Turma")
            .where("modulo", ">", 0)
            res.send(response)
        }

        if(!connection){
            errorCode = 500
            throw new Error("Server error, try again later");
            
        }

        if(!response.length){
            errorCode = 404
            throw new Error("The list is empty");
            
        }

        res.send(response)
        
    } catch (error:any) {
        res.status(errorCode).send(error.sqlMessage ||  error.message)
    }
}
