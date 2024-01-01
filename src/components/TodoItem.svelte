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
    <input type="checkbox" class="checkbox checkbox-primary me-3" />
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
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        /></svg
      >
    </button>
  </span>
</li>
