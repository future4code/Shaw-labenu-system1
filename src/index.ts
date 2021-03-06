import app from "./app"
import { CreateDocentes } from "./endpoints/Docentes/CreateDocentes"
import { GetAllDocents } from "./endpoints/Docentes/GetAllDocentes"
import { ChangeDocentes } from "./endpoints/Docentes/ChangeDocentes"
import createStudant from "./endpoints/Studants/createStudant"
import getStudantByName from "./endpoints/Studants/getStudant"
import updateStudant from "./endpoints/Studants/updateStudant"
import { CreateClass } from "./endpoints/Class/CreateClass"
import { GetClass } from "./endpoints/Class/GetClass"
import { ChangeModule } from "./endpoints/Class/ChangeModule"
import { CreateClass } from "./endpoints/CreateClass"
import { GetClass } from "./endpoints/GetClass"
import { ChangeModule } from "./endpoints/ChangeModule"


app.post('/studant', createStudant)
app.get('/studant/:nome', getStudantByName)
app.put('/studant/:id', updateStudant)

//--------------------------------------------------Criar Turma-------------------------------------------------------------------------------------------------------

app.post("/createClass", CreateClass)


//--------------------------------------------------Buscar turmas ativas----------------------------------------------------------------------------------------------

app.get("/getClass", GetClass)


//--------------------------------------------------Mudar turma de Módulo-------------------------------------------------------------------------------------------------------

app.put("/changeClass/:id", ChangeModule)


//--------------------------------------------------Criar novo Docente-------------------------------------------------------------------------------------------------------

app.post("/docentes", CreateDocentes)


//--------------------------------------------------Pegar todos Docentes -------------------------------------------------------------------------------------------------------

app.get("/docentes", GetAllDocents)

//--------------------------------------------------Mudar Docente de Turma-------------------------------------------------------------------------------------------------------

app.put("/docente/:email", ChangeDocentes)
