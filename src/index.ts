import app from "./app"
import createStudant from "./endpoints/Studants/createStudant"
import getStudantByName from "./endpoints/Studants/getStudant"
import updateStudant from "./endpoints/Studants/updateStudant"
import { CreateClass } from "./endpoints/CreateClass"
import { GetClass } from "./endpoints/GetClass"
import { ChangeModule } from "./endpoints/ChangeModule"
import { CreateDocentes } from "./endpoints/Docentes/CreateDocentes"
import { GetAllDocents } from "./endpoints/Docentes/GetAllDocentes"
import { ChangeDocentes } from "./endpoints/Docentes/ChangeDocentes"


app.post('/studant', createStudant)
app.get('/studant/:nome', getStudantByName)
app.put('/studant/:id', updateStudant)





//--------------------------------------------------Criar Turma--------------------------------------------------------------------------------------------

app.post("/createClass", CreateClass)


//--------------------------------------------------Buscar turmas ativas-----------------------------------------------------------------------------------

app.get("/getClass", GetClass)


//--------------------------------------------------Mudar turma de Módulo-------------------------------------------------------------------------------------------------------

app.put("/changeClass/:id", ChangeModule)



app.post("/docentes", CreateDocentes)
app.get("/docentes", GetAllDocents)
app.put("/docente/:email", ChangeDocentes)

