import { Request, Response } from "express"
import app from "../../app"
import connection from "../../data/connection"

export const GetAllDocents = async (req: Request, res: Response): Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Docente
        `)

        res.send(result[0])

    } catch (error: any) {
        res.send(error.sqlMessage || error.message)
    }
}