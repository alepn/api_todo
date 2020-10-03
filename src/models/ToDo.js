const NodeCache = require('node-cache')
const cache = new NodeCache()
cache.set('todos', [])

module.exports = class ToDo{

    static list(){
        return cache.get('todos')
    }

    static create(todo){
        const todos = cache.get('todos')
        cache.set('todos',[...todos, todo])
    }

}