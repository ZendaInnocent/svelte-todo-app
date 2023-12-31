<script>
  import { todos } from './stores'

  let todo

  function handleSubmit() {
    if (todo === '') return
    todos.set([...$todos, { title: todo, completed: false }])
    todo = ''
  }

  function deleteTodo(todo) {
    todos.set($todos.filter((t) => t !== todo))
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
  {#if $todos.length === 0}
    <p>No tasks to do!</p>
  {:else}
    <ul>
      {#each $todos as todo}
        <li>
          {todo.title}
          <span>
            <button on:click={deleteTodo.bind(this, todo)}> Delete </button>
          </span>
        </li>
      {/each}
    </ul>
    <div>
      <button on:click={() => todos.set([])}> Delete Tasks </button>
    </div>
  {/if}
</div>
