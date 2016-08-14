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
            message: 'Task must be at least four character long'
          }
        },
      }],
      newTodo:''
    }
  },
  computed: {
    isRequired: function () {

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
    }
  }
}

