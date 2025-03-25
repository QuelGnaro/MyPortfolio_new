// todo.actions.ts
import { createAction, props } from '@ngrx/store';

export const addTask = createAction('[Todo] Add Task', props<{ text: string; }>());
export const deleteTask = createAction('[Todo] Delete Task', props<{ id: string; }>());
export const toggleTask = createAction('[Todo] Toggle Task', props<{ id: string; }>());
export const updateTask = createAction('[Todo] Update Task', props<{ id: string, text: string; }>());
export const editTask = createAction(
  '[Todo] Edit Task',
  props<{ id: string, editing: boolean; }>()
);
export const setFilter = createAction(
  '[Todo] Set Filter',
  props<{ filter: 'all' | 'active' | 'completed'; }>()
);
export const clearCompleted = createAction('[Todo] Clear Completed');