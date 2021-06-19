const gerenteModel = require('./../models/gerenteModel')

const gerentesAll = (req, res) => {
    gerenteModel.getAllgerente((err, resultado) => {
        if (err) {
            throw err
        } else {
            console.log(resultado)
            res.render('gerente/gerenteList.ejs', {
                title: "LISTAGEM DE GERENTES",
                obj_gerentes: resultado
            })

        }
    })
}

const novoGertente = (req, res) => {
    res.render('gerente/gerenteNovo.ejs')
}

const editar = (req, res) => {
    let id = req.params.id
    console.log('=> ', id)
    gerenteModel.getById(id, (err, resultado) => {
        if (err) {
            throw err
        }
        console.log(' =>  ', resultado[0])
        res.render('gerente/gerenteEditar.ejs', {
            obj_gerente: resultado[0]
        })
    })
}

const gravar = (req, res) => {
    console.log('req => ', req.body)
    let dados = req.body
    if (dados.ger_id != '') {
        gerenteModel.updateGetente(dados, (err, result) => {
            if (err) {

                throw err
            }

            res.redirect('/gerentes')
        })
    } else {
        gerenteModel.inserirGerente(dados, (err, resulta) => {
            if (err) {
                throw err
            }

            res.redirect('/gerentes')
        })
    }
    return

}

const deletar = (req, res) => {
    let id = req.params.id
    gerenteModel.deletar(id, (err, resultado) => {
        if (err) {
            throw err
        }

        res.redirect('/gerentes')
    })
}

module.exports = {
    gerentesAll,
    novoGertente,
    gravar,
    editar,
    deletar
}

