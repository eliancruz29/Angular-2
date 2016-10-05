import { Injectable } from '@angular/core';

@Injectable()
export class TasksService{
    tasks: Array<string> = ["First task", "Second task", "Third task", "Four task"];

    getTasks(): Array<string> {
        return this.tasks;
    }

    addTask(newTask: string){
        this.tasks.push(newTask);
    }
}
