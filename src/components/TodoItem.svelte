<script>
  import { todos } from '../stores'
  export let todo

  function deleteTodo(todo) {
    todos.set($todos.filter((t) => t !== todo))
  }
</script>

<li class="flex items-center justify-between my-2 outline p-3 rounded">
  {todo.title}
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
    <div class="tooltip me-3" data-tip="Edit a Task">
      <button class="btn btn-square btn-sm btn-outline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="h-6 w-6"
          viewBox="0 0 16 16"
        >
          <path
            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
          />
          <path
            fill-rule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
          />
        </svg>
      </button>
    </div>
    <div class="tooltip" data-tip="Delete a Task">
      <button
        class="btn btn-square btn-sm btn-outline"
        on:click={deleteTodo.bind(this, todo)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </span>
</li>
