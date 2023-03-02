import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../models/learning.model';
import { LearningService } from '../../services/learning.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
  // @Output() addPerson = new EventEmitter<Person>();
  // @Output() cancelForm = new EventEmitter<null>();
  @Input() person?: Person;
  @Input() actionType: 'Add' | 'Edit' = 'Add';
  isError = false;
  name!: string;
  age!: number;
  sex!: 'Male' | 'Female' | 'Other' | undefined;
  occupation?: string;

  constructor(private ls: LearningService) {}

  ngOnInit(): void {
    if (this.person) {
      this.name = this.person.name;
      this.age = this.person.age;
      this.sex = this.person.sex;
      this.occupation = this.person.occupation;
    }
  }

  addPerson(person: Person) {
    this.ls.addPerson(person).subscribe((res) => {});
  }
  editPerson(person: Person) {
    this.ls.editPerson(person).subscribe();
  }

  onFormSubmit() {
    const personToAdd: Person = {
      name: this.name,
      age: <number>this.age,
      sex: this.sex,
      occupation: this.occupation,
    };
    if (!this.name || !this.age || !this.sex || !this.occupation) {
      this.isError = true;
    } else {
      if (this.person) {
        this.editPerson({ ...this.person, ...personToAdd });
      } else {
        this.addPerson(personToAdd);
      }
    }
  }
}
