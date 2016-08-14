export default {
  data() {
    return {
      todos: [],
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

