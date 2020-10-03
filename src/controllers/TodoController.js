const ToDo = require('../models/ToDo')

module.exports = {

    list(req, res){       
        const todo = {
            title: 'Tarefa 1',
            description: 'Descrição tarefa 1'
        }
        ToDo.create(todo)
        const todos = ToDo.list()
        return res.json(todos)
    }

}