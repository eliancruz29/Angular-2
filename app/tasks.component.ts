import { Component } from '@angular/core';

@Component({
  selector: 'tasks',
  template: `
  <h4 [ngClass]="{red:toggle, blue:!toggle}">This is the Tasks Component</h4>
  <h4 [ngClass]="{red:!toggle, blue:toggle}">This is the second Tasks Component</h4>
  <span>{{num | json}}</span>
  <h5 *ngIf="!toggle">Hello World!</h5>
  <ul *ngIf="toggle">
    <li *ngFor="let person of people">
      {{ person }}
    </li>
  </ul>
  <button (click)="onClick()">Click me!</button>
  <button (mouseenter)="mouseEnter()">Mouse enter!</button>
  <input [(ngModel)]="sample">
  <span>{{sample}}</span>
  `,
  styles: [".red {color:red}", ".blue {color:blue}"]
})
export class TasksComponent {
    num: Array<number> = [7,12,15];
    toggle: boolean = true;
    people: Array<string> = ["Person1", "Person2", "Person3"];
    sample: string = "";

    constructor(){}

    onClick(){
      alert("Button clicked!!!");
    }

    mouseEnter(){
      alert("Mouse entered!!!");
    }
}
