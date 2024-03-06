export type Todo = {
  id: string
  name: string
  completed: boolean
}

export interface TodosState {
  todos: Todo[]
}

export type FilterType = 'all' | 'completed' | 'current'
