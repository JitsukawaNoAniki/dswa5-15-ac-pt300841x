module.exports = function(app) {

    var verificaAutenticacao = require('../../config/auth');
    var controller = app.controllers.contato;

    app.route('/contatos')
        .get(verificaAutenticacao, controller.listaContatos)
        .post(verificaAutenticacao, controller.salvaContato)

    app.route('/contatos/:id')
        .get(verificaAutenticacao, controller.obtemContato)
        .delete(verificaAutenticacao, controller.removeContato);
};