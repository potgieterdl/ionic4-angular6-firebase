import { Component } from '@angular/core';
import { Todo, TodoType } from '../_models/todo';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private todosCollection: AngularFirestoreCollection<Todo>;
  todos: Observable<Todo[]>;

  constructor(private afs: AngularFirestore) {
    this.todosCollection = afs.collection<Todo>('todos');
    this.todos = this.todosCollection.valueChanges();
  }

  addItem(type: string, desc: string) {
    const id = this.afs.createId();
    const todo: Todo = { id, type, desc};
    this.todosCollection.doc(id).set(todo);
  }
}
