import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courseApp';

  flag1="recipe"
  //another is shopping
  appHeadClick(var2:string){
  
   this.flag1=var2;
   console.log("see  "+this.flag1);
  }
}
