export default {
  data() {
    return {
      todos: [],
      fields: [{
        id: 'text',
        label: 'Task Name',
        name: 'text',
        placeholder: 'Enter your todo',
        validate: {
          required: {
            rule: true,
            message: 'Task is required'
          },
          minlength: {
            rule: 4,
            message: 'Task must m'
          }
        },
      }],
      newTodo:''
    }
  },
  methods: {
    addTodo (event) {
      if (this.newTodo) {

      }
      this.todos = [
        ...this.todos, {
          id: this.todos.length + 1,
          text: this.newTodo,
          completed: false
        }
        ]
      this.newTodo = ''
    },
    toggleTodo(id) {
       // Todo: Resolve the bug
       let todo = this.todos[id + 1]
       this.todos = [
         ...this.todos.slice(0, id),
         {...todo, completed: !todo.completed},
         ...this.todos.slice(id+1)
       ]
    },
    removeTodo (id) {
      this.todos = [
        ...this.todos.slice(0, id),
        ...this.todos.slice(id+1)
      ]
    },

  }
}

