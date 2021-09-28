import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() textTitle: string = "Your list is empty";
  @Input() text: string = "Add new course";
  @Input() addCourseButtonName: string = "Add new course";


  constructor() { }

  ngOnInit(): void {
  }

}
