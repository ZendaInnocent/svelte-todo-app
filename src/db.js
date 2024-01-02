import Dexie, { liveQuery } from 'dexie'

const db = new Dexie('todo-app-db')

db.version(1).stores({
  todos: '++id, title, done',
})

export let todos = liveQuery(() => db.todos.toArray())

export async function addTodo(title) {
  return await db.todos.add({ title, completed: false })
}
