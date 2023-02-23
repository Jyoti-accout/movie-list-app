import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/learning.model';
import { LearningService } from '../../services/learning.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  adults!: Person[];
  kids!: Person[];
  teens!: Person[];
  showForm = false;
  name!: string;
  age?: number;
  sex?: 'Male' | 'Female' | 'Other';
  occupation!: string;

  constructor(private ls: LearningService) {}

  ngOnInit(): void {
    this.updatePersonList();
  }
  private updatePersonList() {
    this.adults = this.ls.getPersons().filter((person) => person.age > 18);
    this.kids = this.ls.getPersons().filter((person) => person.age < 13);
    this.teens = this.ls
      .getPersons()
      .filter((person) => person.age > 12 && person.age < 20);
  }
  addPerson() {
    this.name = '';
    this.age = undefined;
    this.sex = undefined;
    this.occupation = '';
    this.showForm = true;
  }
  onFormSubmit() {
    const personToAdd: Person = {
      name: this.name,
      age: <number>this.age,
      sex: this.sex,
      occupation: this.occupation,
    };
    this.ls.addPerson(personToAdd);
    this.updatePersonList();
    this.showForm = false;
  }
}
