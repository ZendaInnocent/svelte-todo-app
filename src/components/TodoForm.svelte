<script>
  import { todos } from '../stores'
  let todo

  function handleSubmit() {
    if (todo === '') return
    todos.set([...$todos, { title: todo, completed: false }])
    todo = ''
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="Add Todo" bind:value={todo} />
  <button type="submit">Submit</button>
</form>
