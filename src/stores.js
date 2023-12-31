import { writable } from 'svelte/store'

export const todos = writable([
  { title: 'Learn Svelte', completed: true },
  { title: 'Learn SvelteKit', completed: false },
])
