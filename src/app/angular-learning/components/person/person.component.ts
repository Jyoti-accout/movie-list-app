import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../models/learning.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  @Input() persons!: Person[];
  @Input() personType!: string;
  constructor() {}

  ngOnInit(): void {}
}