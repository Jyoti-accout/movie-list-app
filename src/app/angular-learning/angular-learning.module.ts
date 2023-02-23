import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularLearningRoutingModule } from './angular-learning-routing.module';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { PersonComponent } from './components/person/person.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DataBindingComponent, PersonComponent],
  imports: [CommonModule, AngularLearningRoutingModule, FormsModule],
})
export class AngularLearningModule {}
