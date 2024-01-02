<script>
  import TodoItem from './TodoItem.svelte'
  import { todos } from '../db'

  function markTasksComplted() {
    $todos.forEach((todo) => {
      todo.completed = true
    })
    $todos = $todos
  }

  function deleteCompletedTasks() {
    $todos = $todos.filter((todo) => !todo.completed)
  }
</script>

{#if $todos}
  {#if $todos.length === 0}
    <p>No tasks to do!</p>
  {:else}
    <ul>
      {#each $todos as todo}
        <TodoItem {todo} />
      {/each}
    </ul>
    <div class="divider"></div>
    <div class="text-right">
      <button
        on:click={markTasksComplted}
        class="btn btn-info btn-sm text-white"
      >
        Check Tasks
      </button>
      <button
        on:click={deleteCompletedTasks}
        class="btn btn-error btn-sm text-white"
      >
        Delete Completed Tasks
      </button>
    </div>
  {/if}
{/if}
