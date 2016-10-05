import { Component } from '@angular/core';

@Component({
  selector: 'tasks',
  template: `
  <h4 [ngClass]="{red:toggle, blue:!toggle}">This is the Tasks Component</h4>
  <h4 [ngClass]="{red:!toggle, blue:toggle}">This is the second Tasks Component</h4>
  <h5 *ngIf="!toggle">Hello World!</h5>
  <ul *ngIf="toggle">
    <li *ngFor="let person of people">
      {{ person }}
    </li>
  </ul>
  `,
  styles: [".red {color:red}", ".blue {color:blue}"]
})
export class TasksComponent {
    constructor(){}
    toggle: boolean = true;
    people: Array<string> = ["Person1", "Person2", "Person3"];
}
