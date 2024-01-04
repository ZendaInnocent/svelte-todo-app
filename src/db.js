import Dexie, { liveQuery } from 'dexie'

const db = new Dexie('todo-app-db')

db.version(1).stores({
  todos: '++id, title, completed, createdAt, dueDate, updatedAt',
})

export let todos = liveQuery(async () => {
  const _todos = await db.todos.toArray()
  _todos.sort((a, b) => b.createdAt - a.createdAt)
  return _todos
})

export async function addTodo(title) {
  return await db.todos.add({
    title,
    completed: false,
    createdAt: Date.now(),
    dueDate: Date.now() + 1000 * 60 * 60 * 24,
  })
}

export async function deleteTodo(todo) {
  return await db.todos.delete(todo.id)
}

export async function updateTodo(todo) {
  return await db.todos.update(todo.id, {
    title: todo.title,
    completed: todo.completed,
    updatedAt: Date.now(),
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
