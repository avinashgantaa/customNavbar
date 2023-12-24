import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const modules=[
  NgbModule,
  MatCardModule,
  MatButtonModule,
  NgbDropdownModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports:[modules]
})
export class SharedModule { }
