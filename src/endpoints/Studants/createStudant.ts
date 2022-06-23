import { Request, Response } from 'express';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import connection from '../../data/connection';


const createStudant = async (req: Request, res: Response): Promise<any> => {

    try {

        const { nome, email, data_nasc, turma_id } = req.body

        if (!nome || !email || !data_nasc || !turma_id) {
            return res.status(422).send({ message: 'Campos faltando !' })
        }

        const studant = {
            id: uuidv4(),
            nome,
            email,
            data_nasc: moment(data_nasc, "DD/MM/YYYY").format("YYYY-MM-DD"),
            turma_id
        }

        const Studants = await connection('Estudante')

        const studantExists = Studants.find(item => item.email === email)

        if (studantExists) {
            return res.status(409).send({ message: 'E-mail já cadastrado ou nickname já está sendo usado !' })
        }

        await connection('Estudante').insert(studant)

        res.status(201).send({ studant, message: 'Usuário criado com sucesso !' });


    } catch (error: any) {

        res.status(400).send({ message: error.sqlMessage || error.message })

    }

}

export default createStudant