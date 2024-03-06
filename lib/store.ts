import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import todosSlice from './features/todos/todos-slice'

export const makeStore = (): EnhancedStore => {
  return configureStore({
    'reducer': {
      'todos': todosSlice,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
