import { NgModule } from '@angular/core';
import { StudentsComponent } from './students.component';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [StudentsComponent],
  imports: [
    ThemeModule,
  ],
})
export class StudentsModule { }
