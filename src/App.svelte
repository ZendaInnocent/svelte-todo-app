<script>
  import { onMount } from 'svelte'
  import './App.css'
  import TodoItems from './components/TodoItems.svelte'
  import TodoForm from './components/TodoForm.svelte'
  import Icon from '@iconify/svelte'
  import { themeChange } from 'theme-change'

  let themes = [
    'light',
    'dark',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'forest',
    'aqua',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'night',
  ]

  onMount(() => {
    themeChange(false)
  })
</script>

<header class="container">
  <div class="text-right">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn m-1">
        Theme
        <Icon icon="basil:caret-down-solid" class="h-6 w-6" />
      </div>
      <ul
        class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
      >
        {#each themes as theme}
          <li>
            <input
              type="radio"
              name="theme-dropdown"
              class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={theme}
              value={theme}
              data-act-class="active"
              data-set-theme={theme}
            />
          </li>
        {/each}
      </ul>
    </div>
  </div>
</header>

<main class="container py-4 mx-auto mt-4">
  <h1 class="text-4xl mb-4 text-center">Todo List App</h1>

  <div class="text-center">
    <TodoForm />
  </div>
  <div class="divider"></div>
  <div>
    <TodoItems />
  </div>
</main>
