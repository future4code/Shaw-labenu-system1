import { Request, Response } from "express"
import app from "../../app"
import connection from "../../data/connection"
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";


export const CreateDocentes = async (req: Request, res: Response): Promise<any> => {

    try {
        let error = 400

        const { nome, email, data_nasc, turma_id } = req.body

        const data = moment(data_nasc, "DD/MM/YYYY").format("YYYY-MM-DD")

        const result = await connection("Docente")
            .insert({
                id: uuidv4(),
                nome,
                email,
                data_nasc: data,
                turma_id
            })


        if (!result || !email || !data_nasc || !turma_id) {
            error = 404
            throw new Error("Erro inesperado, verifique se preencheu corretamente");
        }

        res.send("Criado com Sucesso!")

    } catch (error: any) {
        res.status(error).send(error.slqMessage || error.message)
    }
}


