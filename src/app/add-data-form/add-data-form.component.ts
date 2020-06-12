import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'add-form',
  templateUrl: './add-data-form.component.html',
  styleUrls: ['./add-data-form.component.css']
})
export class AddDataFormComponent implements OnInit {
  dataForm = new FormGroup({
    title: new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    link: new FormControl(),
    body: new FormControl()
  })
  constructor(private Service: DataService) {

  }
 

  add1(obj){
    console.log(this.dataForm)
    this.Service.addData(obj);
  }


  ngOnInit(): void {
  }

}
