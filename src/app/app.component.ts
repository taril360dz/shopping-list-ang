import { Component } from '@angular/core';
import { ItemService } from './Services/ItemService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-list';
  constructor(private itemService : ItemService){}

  public stuffToRender(){
    return this.itemService.getAll().length > 0
  }
}
