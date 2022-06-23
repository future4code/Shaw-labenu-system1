import { Request, Response } from 'express'
import connection from "../../data/connection"


const updateStudant = async (req: Request, res: Response): Promise<any> => {

    try {
        const { turma_id } = req.body

        if (!turma_id) {
            res.status(422).send({ message: 'Você precisa passar o id da turma que você vai ser transferido' })

        }

        await connection('Estudante')
            .update({ turma_id })
            .where({ id: req.params.id })
        res.status(200).send({ message: 'Usuário editado com sucesso !' })


    } catch (error: any) {
        res.status(400).send({ message: error.sqlMessage || error.message })
    }

}

export default updateStudant