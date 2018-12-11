import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styles: []
})
export class TemplatedrivenComponent implements OnInit {
  user: User;
  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }
  saveData(form: NgForm) {
    if (form.valid) {
      alert('form is valid!');
      console.log(this.user);
    }
  }
}
