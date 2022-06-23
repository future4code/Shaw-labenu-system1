import { Request, Response } from "express"
import app from "../../app"
import connection from "../../data/connection"
import { v4 as uuidv4 } from 'uuid';



export const ChangeDocentes = async (req: Request, res: Response): Promise<any> => {

    try {
        let error = 400

        const { turma_id } = req.body

        const id_turma = await connection("Docente")
        const filter_id = id_turma.find(item => item.turma_id = req.body.turma_id)

        const result = await connection("Docente")
            .update({ turma_id })
            .where({ email: req.params.email })

        if (!turma_id) {
            error = 404
            throw new Error("Erro inesperado, verifique se preencheu corretamente");
        } else if (turma_id === "" || " ") {
            error = 410
            throw new Error("Erro inesperado, os campos não pode estar vazio");
        } else if (turma_id === filter_id) {
            error = 410
            throw new Error("O Docente já está nessa turma");
        }

        res.send(`Docente alterado de turma com Sucesso`)


    } catch (error: any) {
        res.status(error).send(error.slqMessage || error.message)
    }

}