import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import {SharedModule} from "../../shared/shared.module";
import {CourseModule} from "../course/course.module";
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseCardComponent } from './course-card/course-card.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CourseCardComponent
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
