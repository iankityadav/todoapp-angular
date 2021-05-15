import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items:Todo[] = new Array()

  public onAdd(f:NgForm) {
    if(f.value.item!="")
      this.items.push({id:this.items.length,item:f.value.item,isDone:false})
  }
  public onDelete(item:Todo) {
    var x = this.items.indexOf(item)
    this.items.splice(x, 1)    
  }
  public toggle(item:Todo) {
    item.isDone = !item.isDone
  }
}
