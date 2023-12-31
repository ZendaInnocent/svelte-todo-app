<script>
  import { todos } from '../stores'
  import TodoItem from './TodoItem.svelte'
</script>

{#if $todos.length === 0}
  <p>No tasks to do!</p>
{:else}
  <ul>
    {#each $todos as todo}
      <TodoItem {todo} />
    {/each}
  </ul>
  <div>
    <button on:click={() => todos.set([])}> Delete Tasks </button>
  </div>
{/if}
