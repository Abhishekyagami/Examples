import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 data =[
  { id:'1', 
    title:'Methods of primitives',
    link:'https://javascript.info/primitives-methods',
    body:''},
 
  { id:'2',
    title:'Numbers',
    link:'https://javascript.info/number',
    body:''},

  { id:'3',
    title:'Strings',
    link:'https://javascript.info/string',
    body:''},

  { id:'4',
    title:'Arrays',
    link:'https://javascript.info/array',
    body:''},
  
  { id:'5',
    title:'Array methods',
    link:'https://javascript.info/array-methods',
    body:''},
  
  { id:'6',
    title:'Iterables',
    link:'https://javascript.info/iterable',
    body:''},

  { id:'7',
    title:'Map and Set',
    link:'https://javascript.info/map-set',
    body:''},
  
  { id:'8',
    title:'WeakMap and WeakSet',
    link:'https://javascript.info/weakmap-weakset',
    body:''},

  { id:'9', 
    title:'Object.keys, values, entries',
    link:'https://javascript.info/keys-values-entries',
    body:''},
  
  { id:'10', 
    title:'Destructuring assignment', 
    link:'https://javascript.info/destructuring-assignment',
    body:''},
  
  { id:'11',
    title:'Introduction: callbacks', 
    link:'https://javascript.info/callbacks',
    body:''},
  
  { id:'12', 
    title:' Promise', 
    link:'https://javascript.info/promise-basics',
    body:''},

  { id:'13', 
    title:'Promises chaining', 
    link:'https://javascript.info/promise-chaining',
    body:''},

  { id:'14', 
    title:'Error handling with promises',
    link:'https://javascript.info/promise-error-handling',
    body:''},

  { id:'15', 
    title:' Promise API', 
    link:'https://javascript.info/promise-api',
    body:''},

  { id:'16', 
    title:'Promisification', 
    link:'https://javascript.info/promisify',
    body:''}
];



  constructor() {
     
  }

  addData(data) {
      //console.log(data); 
      data.id=this.data.length + 1;
      this.data.push(data);
      
  }



  getContent(){
    return this.data;
  }
}
