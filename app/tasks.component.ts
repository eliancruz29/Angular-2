import { Component } from '@angular/core';

@Component({
  selector: 'tasks',
  template: `
  <h4 [ngClass]="{red:toggle, blue:!toggle}">This is the Tasks Component</h4>
  <h4 [ngClass]="{red:!toggle, blue:toggle}">This is the second Tasks Component</h4>
  `,
  styles: [".red {color:red}", ".blue {color:blue}"]
})
export class TasksComponent {
    constructor(){}
    toggle: boolean = false;
}
