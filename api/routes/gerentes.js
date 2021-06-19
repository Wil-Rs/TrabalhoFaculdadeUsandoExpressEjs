const gerenteController = require('./../controllers/gerenteController')

app.get('/gerentes', gerenteController.gerentesAll)
app.get('/gerentes/novo', gerenteController.novoGertente)
app.post('/gerentes/gravar', gerenteController.gravar)
app.get('/gerente/editar/:id', gerenteController.editar)
app.get('/gerente/apagar/:id', gerenteController.deletar)