export default {
  data() {
    return {
      todos: [],
      fields: [ {
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
      } ],
      newTodo: ''
    }
  },
  methods: {
    addTodo (event) {
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
      this.todos = this.todos.map((todo) => (
        (todo.id !== id ) ? todo : { ...todo, completed: !todo.completed })
      )
    },
    removeTodo (id) {
      this.todos = this.todos.filter((todo) => todo.id !== id && todo)
    },

  }
}

