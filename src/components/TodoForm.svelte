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
  <input
    type="text"
    placeholder="Add a To-Do"
    bind:value={todo}
    class="input input-bordered input-primary w-3/4 me-3"
  />
  <button type="submit" class="btn btn-primary text-white">Submit</button>
</form>
