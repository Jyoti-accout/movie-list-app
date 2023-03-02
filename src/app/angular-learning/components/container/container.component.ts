import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPersonComponent } from '../add-person/add-person.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  addPerson() {
    this.dialog.open(AddPersonComponent, {
      height: '530px',
      width: '600px',
    });
  }
}
