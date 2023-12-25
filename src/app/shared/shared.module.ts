import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule} from '@angular/common/http';
import { MatIconModule} from '@angular/material/icon'

const modules=[
  NgbModule,
  MatCardModule,
  MatButtonModule,
  NgbDropdownModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  HttpClientModule,
  MatIconModule
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
