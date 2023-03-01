import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../models/learning.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  @Input() persons!: Person[];
  @Input() personType!: string;
  @Output() editPersonEvent = new EventEmitter<Person>();
  @Output() deletePersonEvent = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  editClickHandler(person: Person) {
    this.editPersonEvent.emit(person);
  }
  deleteClickHandler(id: number | undefined) {
    this.deletePersonEvent.emit(id);
  }
}
