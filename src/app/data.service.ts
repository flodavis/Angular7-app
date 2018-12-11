/* A Service is for a file you want all files to have access to
like getting acess from a database file a table, etct. */

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

    getUsers() {
      return this.http.get('https://jsonplaceholder.typicode.com/users');
    }

    getUser(userId) {
      return this.http.get('https://jsonplaceholder.typicode.com/users/' +userId);
    }

    getPosts() {
      return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
   
}
