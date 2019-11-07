import { Todo } from './todo';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from "rxjs/operators";
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  //urlApi = 'http://localhost:3000/todos';

  constructor(private afs: AngularFirestore) { }

  getAll() {
    return this.afs.collection('todos').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Todo;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }

  persist(todo: Todo) {
    return this.afs.collection('todos').add(todo);
  }

  // update(todo: Todo) {
  //   return this.http.put(`${this.urlApi}/${todo.id}`, todo);
  // }

  delete(id) {
    return this.afs.collection('todos').doc(id).delete();
  } 
}
