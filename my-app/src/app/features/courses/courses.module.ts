import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import {SharedModule} from "../../shared/shared.module";
import {CourseModule} from "../course/course.module";


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    SharedModule,
    CourseModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
