import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string = "Show course";
  @Input() iconEditName: string = "";
  @Input() iconName: string = "Annihilate";
  @Input() editable: boolean = false;

  edit = this.iconEditName;
  annihilate = this.iconName;

  constructor() { }

  ngOnInit(): void {
  }

}
