import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/learning.model';
const url = 'http://localhost:3000/api/';
@Injectable({
  providedIn: 'root',
})
export class LearningService {
  constructor(private http: HttpClient) {}

  addPerson(person: Person): Observable<any> {
    // person = { ...person, id: this.persons.length + 1 };
    // this.persons.push(person);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(url + 'add-person', person, httpOptions);
  }

  getPersons(): Observable<Person[]> {
    return <Observable<Person[]>>this.http.get(url + 'persons');
  }
  editPerson(person: Person): Observable<any> {
    // const index = <number>person.id - 1;
    // this.persons[index] = person;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(url + 'update-person', person, httpOptions);
  }
  deletePerson(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(url + 'delete-person', { id }, httpOptions);
  }
}
