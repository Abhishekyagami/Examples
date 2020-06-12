import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  data:any[];
  link;
  // obj;
  
  constructor(private route: ActivatedRoute,service:DataService) { 
    this.data = service.getContent();
    // this.obj= this.data.find(ele =>ele.id ===this.id);
  }
  id:number;
  
  
  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params=>{
        this.id = +params.get('id');
        this.link=this.data[this.id-1].link;
      })
  }
 
  



}
