import app from "./app"

import { CreateClass } from "./endpoints/CreateClass"
import { GetClass } from "./endpoints/GetClass"
import { ChangeModule } from "./endpoints/ChangeModule"
import { CreateDocentes } from "./endpoints/Docentes/CreateDocentes"
import { GetAllDocents } from "./endpoints/Docentes/GetAllDocentes"
import { ChangeDocentes } from "./endpoints/Docentes/ChangeDocentes"

//--------------------------------------------------Criar Turma--------------------------------------------------------------------------------------------

app.post("/createClass", CreateClass)


//--------------------------------------------------Buscar turmas ativas-----------------------------------------------------------------------------------

app.get("/getClass", GetClass)


//--------------------------------------------------Mudar turma de Módulo-------------------------------------------------------------------------------------------------------

app.put("/changeClass/:id", ChangeModule)


//--------------------------------------------------Criar novo Docente-------------------------------------------------------------------------------------------------------

app.post("/docentes", CreateDocentes)


//--------------------------------------------------Pegar todos Docentes -------------------------------------------------------------------------------------------------------

app.get("/docentes", GetAllDocents)

//--------------------------------------------------Mudar Docente de Turma-------------------------------------------------------------------------------------------------------

app.put("/docente/:email", ChangeDocentes)
