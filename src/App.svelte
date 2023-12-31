<script>
  let todos = [
    { title: 'Learn Svelte', completed: true },
    { title: 'Learn SvelteKit', completed: false },
  ]

  let todo

  function handleSubmit() {
    if (todo === '') return
    todos = [...todos, { title: todo, completed: false }]
    todo = ''
  }

  function deleteTodo(todo) {
    todos = todos.filter((t) => t !== todo)
  }
</script>

<h1>Todo List App</h1>

<div>
  <form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Add Todo" bind:value={todo} />
    <button type="submit">Submit</button>
  </form>
</div>

<div>
  <ul>
    {#each todos as todo}
      <li>
        {todo.title}
        <span>
          <button on:click={deleteTodo.bind(this, todo)}> Delete </button>
        </span>
      </li>
    {/each}
  </ul>
  <div>
    <button on:click={() => (todos = [])}> Delete Tasks </button>
  </div>
</div>
