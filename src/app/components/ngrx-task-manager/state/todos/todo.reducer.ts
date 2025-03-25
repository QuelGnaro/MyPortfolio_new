// todo.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { addTask, clearCompleted, deleteTask, editTask, setFilter, toggleTask, updateTask } from './todo.actions';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  editing: boolean; // Assicurati che esista
}
export interface TodoState {
  tasks: Task[];
  filter: 'all' | 'active' | 'completed'; // Aggiungi questa proprietà
}

export const initialState: TodoState = {
  tasks: [],
  filter: 'all' // Valore iniziale
};

export const todoReducer = createReducer(
  initialState,
  on(addTask, (state, { text }) => ({
    ...state,
    tasks: [
      ...state.tasks,
      {
        id: Date.now().toString(),
        text,
        completed: false,
        editing: false
      }
    ]
  })),
  on(deleteTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.filter(task => task.id !== id)
  })),
  on(toggleTask, (state, { id }) => ({
    ...state,
    tasks: state.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
  })),
  on(updateTask, (state, { id, text }) => ({
    ...state,
    tasks: state.tasks.map(task =>
      task.id === id ? { ...task, text, editing: false } : task
    )
  })),
  on(editTask, (state, { id, editing }) => ({
    ...state,
    tasks: state.tasks.map(task =>
      task.id === id ? { ...task, editing } : task
    )
  }),
  ),
  on(setFilter, (state, { filter }) => ({
    ...state,
    filter
  })),
  on(clearCompleted, (state) => ({
    ...state,
    tasks: state.tasks.filter(task => !task.completed)
  })));