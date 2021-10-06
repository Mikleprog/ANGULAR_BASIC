import {Component, Input, OnInit} from '@angular/core';
import { Card } from '../../../types/inerfaces';
import {COURSES} from "../../../../assets/courses";

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input() courseCard: Card = COURSES[0] ;
  constructor() { }

  ngOnInit(): void {
  }

}
