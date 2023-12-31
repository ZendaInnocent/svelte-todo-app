<script>
  import { todos } from '../stores'
  export let todo

  function deleteTodo(todo) {
    todos.set($todos.filter((t) => t !== todo))
  }
</script>

<li>
  {todo.title}
  <span>
    <button on:click={deleteTodo.bind(this, todo)}> Delete </button>
  </span>
</li>
