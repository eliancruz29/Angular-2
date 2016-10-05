import { Component } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'tasks',
  providers: [TasksService],
  template: `
  <h4 [ngClass]="{red:toggle, blue:!toggle}">This is the Tasks Component</h4>
  <div *ngIf="show">
    <h4 [ngClass]="{red:!toggle, blue:toggle}">This is the second Tasks Component</h4>
    <span>{{num | json}}</span>
    <h5 *ngIf="!toggle">Hello World!</h5>
    <ul *ngIf="toggle">
      <li *ngFor="let person of people">
        {{ person }}
      </li>
    </ul>
    <button (click)="onClick()">Click me!</button>
    <button *ngIf="!toggle" (mouseenter)="mouseEnter()">Mouse enter!</button>
    <hr>
    <input [(ngModel)]="sample">
    <span>{{sample}}</span>
    <br>
    <button (click)="tasksService.addTask(sample)">Add Task</button>
    <hr>
    <span>All Tasks: {{tasksService.tasks | json}}</span>
    <hr>
    <button (click)="getTasks()">Get All Task!</button>
    <span>{{allTasks | json}}</span>
    <hr>
    <ul>
      <li *ngFor="let task of tasksService.tasks">
        {{task}}
      </li>
    </ul>
  </div>
  `,
  styles: [".red {color:red}", ".blue {color:blue}"]
})
export class TasksComponent {
    show: boolean = true;
    num: Array<number> = [7,12,15];
    toggle: boolean = true;
    people: Array<string> = ["Person1", "Person2", "Person3"];
    sample: string = "";
    allTasks: Array<string> = [];

    constructor(private tasksService: TasksService){}

    onClick(){
      alert("Button clicked!!!");
    }

    mouseEnter(){
      alert("Mouse entered!!!");
    }

    getTasks(){
      this.allTasks = this.tasksService.getTasks();
    }
}
