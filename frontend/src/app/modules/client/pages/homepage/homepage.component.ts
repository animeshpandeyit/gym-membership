import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TodolistModel } from 'src/app/core/models/todolist-model.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  todolistModel: TodolistModel;

  // isCompleted: boolean = false;

  constructor() {
    this.todolistModel = new TodolistModel();
  }

  ngOnInit(): void {
    // this.todolist = new FormGroup({
    // })
  }

  submitForm() {
    console.log(this.todolistModel);
  }

  toggleCompletion() {
    this.todolistModel.isCompleted != !this.todolistModel.isCompleted;
  }
}
