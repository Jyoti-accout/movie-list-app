import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../models/learning.model';
import { LearningService } from '../../services/learning.service';
import { AddPersonComponent } from '../add-person/add-person.component';

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
  personToEdit?: Person;
  actionType: 'Add' | 'Edit' = 'Add';
  persons!: Person[];
  // persons!: Observable<Person[]>;

  constructor(private ls: LearningService) {}

  ngOnInit(): void {
    this.updatePersonList();
  }
  private updatePersonList() {
    this.ls.getPersons().subscribe((persons: Person[]) => {
      this.persons = persons;
      this.adults = persons.filter((person) => person.age > 18);
      this.kids = persons.filter((person) => person.age < 13);
      this.teens = persons.filter(
        (person) => person.age > 12 && person.age < 20
      );
    });
  }
  addPerson() {
    this.personToEdit = undefined;
    this.actionType = 'Add';
    this.showForm = true;
  }
  addPersonHandler(person: Person) {
    if (this.actionType === 'Add') {
      this.ls.addPerson(person).subscribe((res) => {
        console.log('Response from add person', res);
        this.updatePersonList();
        this.showForm = false;
      });
    } else {
      this.ls.editPerson(person).subscribe((res) => {
        console.log('Response from edit person', res);
        this.updatePersonList();
        this.showForm = false;
      });
    }
  }
  cancelFormHandler() {
    this.showForm = false;
  }
  editEventHandler(person: Person) {
    this.personToEdit = person;
    this.actionType = 'Edit';
    this.showForm = true;
  }
  deleteEventHandler(id: number) {
    this.ls.deletePerson(id).subscribe((res) => {
      console.log(res);
      this.updatePersonList();
    });
  }
}
