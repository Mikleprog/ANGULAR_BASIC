import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { COURSES } from "../../../assets/courses";
import {Card} from "../../types/inerfaces";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input() courses: Card[] = COURSES;
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
