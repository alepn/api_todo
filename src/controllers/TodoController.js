const mongoose = require('mongoose')

const ToDo = mongoose.model('ToDo')

module.exports = {

    async list(req, res){       
        const todos = await ToDo.find()
        return res.json(todos)
    },

    async create(req, res){
        const newTodo = req.body
        const todoCreated = await ToDo.create(newTodo)
        return res.status(201).json(todoCreated)
    },

    async update(req, res){
        const id = req.params.id
        const todo = req.body
        const todoUpdated = await ToDo.findOneAndUpdate({ _id: id }, todo, {new: true})
        if(!todoUpdated){
            return res.status(400).json({msg: "Item não encontrado!"})
        }
        return res.json(todoUpdated)
    },

    async delete(req, res){
        const id = req.params.id
        const todoDeleted = await ToDo.findOneAndDelete({ _id: id })
        if(!todoDeleted){
            return res.status(400).json({msg: "Item não encontrado!"})
        }
        return res.status(204).json()
    },

}