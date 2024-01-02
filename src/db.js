import Dexie, { liveQuery } from 'dexie'

const db = new Dexie('todo-app-db')

db.version(1).stores({
  todos: '++id, title, done',
})

export let todos = liveQuery(() => db.todos.toArray())

export async function addTodo(title) {
  return await db.todos.add({ title, completed: false })
}

export async function deleteTodo(todo) {
  return await db.todos.delete(todo.id)
}

export async function updateTodo(todo) {
  return await db.todos.update(todo.id, {
    title: todo.title,
    completed: todo.completed,
  })
}

export async function markTodosCompleted() {
  const todos = await db.todos.toArray()

  return await db.todos.bulkPut(
    todos.map((todo) => ({ ...todo, completed: true }))
  )
}

export async function deleteCompletedTodos() {
  const todos = await db.todos.toArray()
  const completedTodos = todos.filter((todo) => todo.completed)
  const ids = completedTodos.map((todo) => todo.id)
  return await db.todos.bulkDelete(ids)
}

export async function toggleTodoCompleted(todo) {
  const _todo = await db.todos.get(todo.id)

  return await db.todos.update(todo.id, {
    completed: !_todo.completed,
  })
}
