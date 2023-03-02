import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from '../../models/learning.model';
import { LearningService } from '../../services/learning.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  persons!: Person[];
  dataSource: MatTableDataSource<Person> = new MatTableDataSource<Person>();
  displayedColumns: string[] = [
    'id',
    'name',
    'age',
    'sex',
    'occupation',
    'action',
  ];
  constructor(private ls: LearningService) {}

  ngOnInit(): void {
    this.ls.getPersons().subscribe((persons: Person[]) => {
      console.log('HERE');
      this.dataSource.data = persons;
    });
  }
}
