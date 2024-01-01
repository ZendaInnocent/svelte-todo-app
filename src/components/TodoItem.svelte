<script>
  import Icon from '@iconify/svelte'
  import { todos } from '../stores'
  export let todo
  let isEditing = false
  let editedTitle = todo.title

  function deleteTodo(todo) {
    todos.set($todos.filter((t) => t !== todo))
  }

  function toggleEditing() {
    isEditing = !isEditing
  }

  function saveEditedTitle() {
    todo.title = editedTitle
    isEditing = false
  }
</script>

<li
  class="flex items-center justify-between my-2 outline {isEditing
    ? 'py-1.5 px-2'
    : 'p-3'} rounded"
>
  {#if isEditing}
    <input
      type="text"
      bind:value={editedTitle}
      class="input input-primary w-3/4 m-0"
    />
  {:else}
    {todo.title}
  {/if}
  <span>
    <div
      class="tooltip"
      data-tip={`Mark a task as ${todo.completed ? 'incomplete' : 'completed'}`}
    >
      <input
        type="checkbox"
        class="checkbox checkbox-primary me-3"
        bind:checked={todo.completed}
      />
    </div>
    {#if isEditing}
      <div class="tooltip me-3" data-tip="Save a Task">
        <button
          class="btn btn-square btn-sm btn-outline"
          on:click={saveEditedTitle}
        >
          <Icon icon="material-symbols:save" width="24" height="24" />
        </button>
      </div>
    {:else}
      <div class="tooltip me-3" data-tip="Edit a Task">
        <button
          class="btn btn-square btn-sm btn-outline"
          on:click={toggleEditing}
        >
          <Icon icon="tabler:edit" width="24" height="24" />
        </button>
      </div>
    {/if}
    <div class="tooltip" data-tip="Delete a Task">
      <button
        class="btn btn-error btn-square btn-sm btn-outline"
        on:click={deleteTodo.bind(this, todo)}
      >
        <Icon icon="mdi:delete-outline" width="24" height="24" />
      </button>
    </div>
  </span>
</li>
