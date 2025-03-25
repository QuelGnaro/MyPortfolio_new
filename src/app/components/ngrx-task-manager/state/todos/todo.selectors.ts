import { createSelector } from '@ngrx/store';
import { AppState } from '../appstate';

export const selectTodoState = (state: AppState) => state.todos;
export const selectTasks = (state: AppState) => state.todos.tasks;
export const selectFilter = (state: AppState) => state.todos.filter;
export const selectFilteredTasks = createSelector(
  selectTasks,
  selectFilter,
  (tasks, filter) => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);