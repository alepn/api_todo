const NodeCache = require('node-cache')
const cache = new NodeCache()
cache.set('todos', [])
cache.set('autoIncrementId', 1)

module.exports = class ToDo{

    static list(){
        return cache.get('todos')
    }

    static create(todo){
        const todos = cache.get('todos')
        const autoIncrementId = cache.get('autoIncrementId')
        todo = {id: autoIncrementId, ...todo}
        cache.set('todos',[...todos, todo])
        cache.set('autoIncrementId', autoIncrementId + 1)
        return todo
    }

    static update(id, todo){
        let todos = cache.get('todos')
        let index = todos.findIndex(item => item.id == id)
        if(index > -1){
            todos[index] = {...todos[index], ...todo}
            cache.set('todos', todos)
            return todos[index]
        }
        return false
    }

    static delete(id){
        let todos = cache.get('todos')
        let index = todos.findIndex(item => item.id == id)
        if(index > -1){
            todos = todos.filter(item => item.id != id)
            cache.set('todos', todos)
            return true
        }
        return false
    }

}