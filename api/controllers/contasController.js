const contasModel = require('./../models/contaModel')
const gerenteModel = require('./../models/gerenteModel')


const getAllContas = (req, res) => {
    contasModel.getAllContas((err, result) => {
        if (err) {
            throw err
        }

        console.log(result)
        res.render('contas/contasList.ejs', {
            title: "LISTAGEM DE CONTAS",
            obj_contas: result
        })
    })
}

const novoConta = (req, res) => {
    gerenteModel.getAllgerente((err, resultado) => {
        if (err) {
            throw err
        }

        console.log(' ====== ', resultado)

        res.render('contas/contasNovo.ejs', {
            gerentes: resultado
        })
    })
}

const editar = (req, res) => {
    let id = req.params.id
    console.log('=> ', id)
    contasModel.getById(id, (err, resultado) => {
        if (err) {
            throw err
        }
        console.log(' =>  ', resultado[0])
        gerenteModel.getAllgerente((err, resul) => {

            if (err) throw err

            res.render('contas/contasEditar.ejs', {
                obj_contas: resultado[0],
                gerentes: resul
            })
        })

    })
}

const gravar = (req, res) => {
    console.log('req => ', req.body)
    let dados = req.body

    if (!!dados.cco_id) {
        contasModel.updateContas(dados, (err, result) => {
            if (err) {

                throw err
            }

            res.redirect('/contas')
        })
    } else {
        contasModel.inserirContas(dados, (err, resulta) => {
            if (err) {
                throw err
            }

            res.redirect('/contas')
        })
    }
    return

}

const deletar = (req, res) => {
    let id = req.params.id
    contasModel.deletar(id, (err, resultado) => {
        if (err) {
            throw err
        }

        res.redirect('/contas')
    })
}

module.exports = {
    getAllContas,
    novoConta,
    gravar,
    editar,
    deletar
}

