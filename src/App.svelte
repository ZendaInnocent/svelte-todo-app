<script>
  import './App.css'
  import TodoItems from './components/TodoItems.svelte'
  import TodoForm from './components/TodoForm.svelte'
</script>

<main class="container py-4 mx-auto">
  <h1 class="text-4xl mb-4 text-center">Todo List App</h1>

  <div class="text-center">
    <TodoForm />
  </div>
  <div class="divider"></div>
  <div>
    <TodoItems />
  </div>
</main>
