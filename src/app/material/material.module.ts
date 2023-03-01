import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [MatButtonModule, MatTableModule],
  exports: [MatButtonModule, MatTableModule],
})
export class MaterialModule {}
