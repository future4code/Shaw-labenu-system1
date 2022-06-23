import app from "./app"
import createStudant from "./endpoints/Studants/createStudant"
import getStudantByName from "./endpoints/Studants/getStudant"
import updateStudant from "./endpoints/Studants/updateStudant"




app.post('/studant', createStudant)
app.get('/studant/:nome', getStudantByName)
app.put('/studant/:id', updateStudant)

