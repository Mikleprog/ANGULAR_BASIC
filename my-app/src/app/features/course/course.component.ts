import { Component, OnInit, Input } from '@angular/core';
import { COURSES } from "../../../assets/courses";
import { Card} from "../../types/inerfaces";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() courseCard: Card = COURSES[0] ;

  constructor() { }

  ngOnInit(): void {
  }

}
