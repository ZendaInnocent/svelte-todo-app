<script>
  import { addTodo } from '../db'
  let todo

  function handleSubmit() {
    if (todo === '') return
    addTodo(todo)
    todo = ''
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input
    type="text"
    placeholder="Add a To-Do"
    name="todo"
    aria-label="todo-input"
    bind:value={todo}
    class="input input-bordered input-primary w-3/4 me-3"
    on:keyup={(e) => {
      if (e.key === 'Escape') {
        todo = ''
        return
      }
    }}
  />
</form>
