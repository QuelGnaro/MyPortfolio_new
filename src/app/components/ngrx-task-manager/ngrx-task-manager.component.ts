import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { addTask, clearCompleted, deleteTask, editTask, setFilter, toggleTask, updateTask } from './state/todos/todo.actions';
import { Task, TodoState } from './state/todos/todo.reducer';
import { AppState } from './state/appstate';
import { selectFilter, selectFilteredTasks, selectTasks, selectTodoState } from './state/todos/todo.selectors';

@Component({
  selector: 'app-ngrx-task-manager',
  templateUrl: './ngrx-task-manager.component.html',
  styleUrl: './ngrx-task-manager.component.scss'
})
export class NgrxTaskManagerComponent {
  tasks$: Observable<Task[]>;
  currentFilter$: Observable<'all' | 'active' | 'completed'>;
  hasCompletedTasks$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.select(selectFilteredTasks);
    this.currentFilter$ = this.store.select(selectFilter); // Per i pulsanti attivi
    this.hasCompletedTasks$ = this.store.select(selectTasks).pipe(
      map(tasks => tasks.some(task => task.completed))
    );
    this.store.select(selectTodoState).subscribe(state => {
      console.log('Current state:', state);
    });
  }
  addTask(text: string) {
    if (text.trim()) {
      this.store.dispatch(addTask({ text }));
    }
  }

  deleteTask(id: string) {
    this.store.dispatch(deleteTask({ id }));
  }

  toggleTask(id: string) {
    this.store.dispatch(toggleTask({ id }));
  }

  updateTask(id: string, event: Event) {
    const text = (event.target as HTMLElement).textContent || '';
    this.store.dispatch(updateTask({ id, text }));
    this.store.dispatch(editTask({ id, editing: false })); // Disabilita editing
  }

  enableEditing(id: string) {
    this.store.dispatch(editTask({ id, editing: true }));
  }
  setFilter(filter: 'all' | 'active' | 'completed') {
    this.store.dispatch(setFilter({ filter }));
  }
  clearCompleted() {
    this.store.dispatch(clearCompleted());
  }
}
