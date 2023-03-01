import { Component, Input } from '@angular/core';
import { Person } from '../../models/learning.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() persons!: Person[];
  displayedColumns: string[] = [
    'id',
    'name',
    'age',
    'sex',
    'occupation',
    'action',
  ];
}
