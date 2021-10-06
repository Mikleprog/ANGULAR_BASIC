import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../types/inerfaces';
import { COURSES} from "../../../../assets/courses";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @Input() courses: Card[] = [COURSES[1]];

  constructor() { }

  ngOnInit(): void {
  }

}
