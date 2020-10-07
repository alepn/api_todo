const ToDo = require('../models/ToDo')

module.exports = {

    list(req, res){       
        const todos = ToDo.list()
        return res.json(todos)
    },

    create(req, res){
        const newTodo = req.body
        const todoCreated = ToDo.create(newTodo)
        return res.status(201).json(todoCreated)
    },

    update(req, res){
        const id = req.params.id
        const todo = req.body
        const todoUpdated = ToDo.update(id, todo)
        if(!todoUpdated){
            return res.status(400).json({msg: 'Item não encontrado'})
        }
        return res.json(todoUpdated)
    },

    delete(req, res){
        const id = req.params.id
        const todoDeleted = ToDo.delete(id)
        if(!todoDeleted){
            return res.status(400).json({msg: 'Item não encontrado'})
        }
        return res.status(204).json()
    }

}