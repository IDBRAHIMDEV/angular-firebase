import { Todo } from './todo';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  //urlApi = 'http://localhost:3000/todos';

  constructor(private afs: AngularFirestore) { }

  getAll() {
    return this.afs.collection('todos').valueChanges();
  }

  persist(todo: Todo) {
    return this.afs.collection('todos').add(todo);
  }

  // update(todo: Todo) {
  //   return this.http.put(`${this.urlApi}/${todo.id}`, todo);
  // }

  // delete(id) {
  //   return this.http.delete(`${this.urlApi}/${id}`);
  // } 
}
