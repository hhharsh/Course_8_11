import { Component, Output ,EventEmitter } from '@angular/core';
//import { } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() headEvent=new EventEmitter<string>();



headClick(var1:string){

this.headEvent.emit(var1);
//console.log("hhh");
  }

}
