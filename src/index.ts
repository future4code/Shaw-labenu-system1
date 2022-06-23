import app from "./app"
import { CreateClass } from "./endpoints/CreateClass"
import { GetClass } from "./endpoints/GetClass"
import { ChangeModule } from "./endpoints/ChangeModule"


//--------------------------------------------------Criar Turma--------------------------------------------------------------------------------------------

app.post("/createClass", CreateClass)


//--------------------------------------------------Buscar turmas ativas-----------------------------------------------------------------------------------

app.get("/getClass", GetClass)


//--------------------------------------------------Mudar turma de Módulo-------------------------------------------------------------------------------------------------------

app.put("/changeClass/:id", ChangeModule)