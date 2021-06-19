const conexao = require('./../../config/conexao')

const getAllContas = (callback) => {
    conexao.query('SELECT * FROM contacorrente inner join gerente where contacorrente.ger_id = gerente.ger_id', callback)
}

const getById = (id, callback) => {
    conexao.query(`SELECT * FROM contacorrente WHERE cco_id = '${id}' `, callback)
}

const inserirContas = (dados, callback) => {
    conexao.query(`INSERT INTO contacorrente (cco_nroconta, cco_tipo, cco_saldo, cco_abertura, ger_id) VALUES ('${dados.cco_nroconta}', '${dados.cco_tipo}', '${dados.cco_saldo}', '${dados.cco_abertura}', '${dados.ger_id}' )`, callback)
}

const updateContas = (dados, callback) => {
    conexao.query(`UPDATE contacorrente SET cco_nroconta = '${dados.cco_nroconta}', cco_tipo = '${dados.cco_tipo}', cco_saldo = '${dados.cco_saldo}', cco_abertura = '${dados.cco_abertura}', ger_id = '${dados.ger_id}' WHERE cco_id = ${dados.cco_id};`, callback)
}

const deletar = (id, callback) => {
    conexao.query(`DELETE FROM contacorrente WHERE cco_id = ${id}`, callback)
}

module.exports = {
    getAllContas,
    inserirContas,
    updateContas,
    getById,
    deletar
}