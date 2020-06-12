import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../data.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  about:string="Seclect a option";
  
  content;
  orignal;
  hidden:boolean=true;
  constructor(service:DataService) {
    this.content=service.getContent();
    this.orignal=service.getContent();
    
   }
  
  
   
  displayAbout(obj){
    console.log("over",obj)
      this.about=obj.title;
  }


  search($event){
    // console.log($event);
    const text = $event.target.value;
    if(text==null||text.length===0)
      this.content=this.orignal;
    else
    this.content=this.content.filter(
       (item)=> item.title.toLowerCase()
                .includes(text.toLowerCase()));
  }

  reset(){
    this.about="Seclect a option";
  }
  toggel(){
    this.hidden=!this.hidden;
  }

  ngOnInit(): void {
  }

}
