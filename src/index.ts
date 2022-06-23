import app from "./app"
import { Request, Response } from "express"
import { CreateDocentes } from "./endpoints/Docentes/CreateDocentes"
import { GetAllDocents } from "./endpoints/Docentes/GetAllDocentes"
import { ChangeDocentes } from "./endpoints/Docentes/ChangeDocentes"



app.post("/docentes", CreateDocentes)
app.get("/docentes", GetAllDocents)
app.put("/docente/:email", ChangeDocentes)


