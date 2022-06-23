import { Request, Response } from 'express';
import moment from 'moment';
import connection from '../../data/connection';

const getStudantByName = async (req: Request, res: Response): Promise<any> => {

    try {
        const nameInvalid = await connection('Estudante')
        const users = nameInvalid.find(item => item.nome === req.params.nome)

        if (!users) {
            return res.status(401).send({ message: 'Esse aluno não existe na turma !' })
        }

        const result = await connection('Estudante')
        .select('*')
        .where({nome: req.params.nome})

        const newResult = {
            ...result[0],
            data_nasc: moment(result[0].data_nasc).format('DD/MM/YYYY')
        }

        res.status(200).send(newResult)

    } catch (error: any) {

        res.status(401).send({ message: error.sqlMessage || error.message })

    }

}

export default getStudantByName