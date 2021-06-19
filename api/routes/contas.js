const contasController = require('./../controllers/contasController')

// app.get('/contas', contasController.getAllContas)
// app.get('/contas/nova', contasController.novaConta)

app.get('/contas', contasController.getAllContas)
app.get('/contas/nova', contasController.novoConta)
app.post('/contas/gravar', contasController.gravar)
app.get('/contas/editar/:id', contasController.editar)
app.get('/contas/apagar/:id', contasController.deletar)