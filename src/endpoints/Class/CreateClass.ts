import { Request, Response } from "express";
import connection from "../data/connetion";
import {v4 as uuidv4} from 'uuid';

export const CreateClass = async (req: Request, res: Response): Promise<any> =>{
    let errorCode = 400

    try {

        const {nome, modulo} = req.body
    
        const result = await connection("Turma")
        .insert({
            id: uuidv4(),
            nome: nome,
            modulo: modulo
        })

        if(!nome){
            errorCode = 404
            throw new Error("Verify the name input");
            
        }

        if(!modulo){
            errorCode = 404
            throw new Error("Verify the modulo input");
            
        }

        res.send("The class was successfully created!")

        
    } catch (error:any) {
        res.status(errorCode).send(error.sqlMessage ||  error.message)
    }
}