import { Request, Response } from "express";
import connection from "../data/connetion";

export const ChangeModule = async (req: Request, res:Response):Promise<any> =>{
    let errorCode = 400

    try {

        const {modulo} = req.body
        const {id} = req.params

        const result = await connection("Turma")
        .update({modulo: modulo})
        .where({id: id})

        if(!modulo){
            errorCode = 404
            throw new Error("Verify the module input");
            
        }

        if(!id){
            errorCode = 404
            throw new Error("Verify the id input");
            
        }

        res.send("Updated Module")
        
    } catch (error:any) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}