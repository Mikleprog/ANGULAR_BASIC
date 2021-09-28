import { Component, OnInit, Input } from '@angular/core';
import { COURSES } from '../../../assets/courses';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses = COURSES;
  constructor() { }

  ngOnInit(): void {
  }

}
