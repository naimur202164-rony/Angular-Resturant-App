import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurent-dash.component.html',
  styleUrls: ['./restaurent-dash.component.css'],
})
export class RestaurentDashComponent implements OnInit {
  formValue!: FormGroup;
  constructor(private formBulider: FormBuilder) {}

  ngOnInit(): void {
    this.formValue = this.formBulider.group({
      name: [' '],
      emai: [''],
      mobile: [''],
      address: [''],
      services: [''],
    });
  }
}
