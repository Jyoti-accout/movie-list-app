import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularLearningRoutingModule } from './angular-learning-routing.module';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { PersonComponent } from './components/person/person.component';
import { FormsModule } from '@angular/forms';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { MaterialModule } from '../material/material.module';
import { TableComponent } from './components/table/table.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [
    DataBindingComponent,
    PersonComponent,
    AddPersonComponent,
    TableComponent,
    ContainerComponent,
  ],
  imports: [
    CommonModule,
    AngularLearningRoutingModule,
    FormsModule,
    MaterialModule,
  ],
})
export class AngularLearningModule {}
