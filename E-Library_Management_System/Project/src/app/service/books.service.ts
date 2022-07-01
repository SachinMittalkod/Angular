import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../booklist/book.model';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl='http://localhost:3000/Books';
  constructor(private http:HttpClient) { }

  getusers(){
    return this.http.get<User[]>(this.baseUrl)
  }
}
