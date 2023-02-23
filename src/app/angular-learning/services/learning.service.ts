import { Injectable } from '@angular/core';
import { Person } from '../models/learning.model';

@Injectable({
  providedIn: 'root',
})
export class LearningService {
  constructor() {}
  persons: Person[] = [
    {
      name: 'Chandra Mohan',
      sex: 'Male',
      age: 37,
      occupation: 'Software Engineer',
    },
    {
      name: 'Jyoti Kumari',
      sex: 'Female',
      age: 27,
      occupation: 'Software Engineer',
    },
    {
      name: 'Jiya Kumar',
      sex: 'Female',
      age: 8,
      occupation: 'Student',
    },
    {
      name: 'Aditya Kumar',
      sex: 'Male',
      age: 22,
      occupation: 'Student',
    },
    {
      name: 'Shreya Kumar',
      sex: 'Female',
      age: 4,
      occupation: 'Happy Kid',
    },
    {
      name: 'Diya Mandal',
      sex: 'Female',
      age: 15,
      occupation: 'Student',
    },
    {
      name: 'Aadi Kumar',
      sex: 'Male',
      age: 17,
      occupation: 'Student',
    },
  ];
  addPerson(person: Person): void {
    this.persons.push(person);
  }

  getPersons(): Person[] {
    return this.persons;
  }
}
