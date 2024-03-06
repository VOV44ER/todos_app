import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { Todo, TodosState } from '@/types/types'

const initialState: TodosState = {
  'todos': [
    { 'name': 'some uncompleted todo', 'completed': false, 'id': '1' },
    { 'name': 'some completed todo', 'completed': true, 'id': '2' },
  ],
}

export const todosSlice = createSlice({
  'name': 'todos',
  initialState,
  'reducers': {
    'add': (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    'complete': (state, action: PayloadAction<string>) => {
      const task = state.todos.find((todo: Todo) => todo.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
  },
})

export const { add, complete } = todosSlice.actions

export const selectTodos = (state: RootState): Todo[] => state.todos.todos

export default todosSlice.reducer
