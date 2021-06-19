const conexao = require('./../../config/conexao')

const getAllgerente = (callback) => {
    conexao.query('SELECT * FROM gerente', callback)
}

const getById = (id, callback) => {
    conexao.query(`SELECT * FROM gerente WHERE ger_id = '${id}' `, callback)
}

const inserirGerente = (dados, callback) => {
    conexao.query(`INSERT INTO gerente (ger_nome, ger_apelido, ger_telefone, ger_banco) VALUES ('${dados.ger_nome}', '${dados.ger_apelido}', '${dados.ger_telefone}', '${dados.ger_banco}')`, callback)
}

const updateGetente = (dados, callback) => {
    conexao.query(`UPDATE gerente SET ger_nome = '${dados.ger_nome}', ger_apelido = '${dados.ger_apelido}', ger_telefone = '${dados.ger_telefone}', ger_banco = '${dados.ger_banco}' WHERE ger_id = ${dados.ger_id};`, callback)
}

const deletar = (id, callback) => {
    conexao.query(`DELETE FROM gerente WHERE ger_id = ${id}`, callback)
}

module.exports = {
    getAllgerente,
    inserirGerente,
    updateGetente,
    getById,
    deletar
}