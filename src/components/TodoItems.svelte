<script>
  import TodoItem from './TodoItem.svelte'
  import { todos, deleteCompletedTodos, markTodosCompleted } from '../db'
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
      <div class="tooltip" data-tip="Mark all tasks as completed">
        <button
          on:click={markTodosCompleted}
          class="btn btn-info btn-sm text-white"
        >
          Check Tasks
        </button>
      </div>
      <div class="tooltip" data-tip="Delete all completed tasks">
        <button
          on:click={deleteCompletedTodos}
          class="btn btn-error btn-sm text-white"
        >
          Delete Completed Tasks
        </button>
      </div>
    </div>
  {/if}
{/if}
