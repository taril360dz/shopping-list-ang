import { Component } from "@angular/core";
import { ItemService } from "src/app/Services/ItemService";


@Component({
    selector:"item-form",
    templateUrl: "./ItemForm.template.html",
    styleUrls: ['./ItemForm.style.css']
})


export class ItemFormComponent{
    constructor(private itemService : ItemService){}
    public currentItem = ""

    public addItem(){
        if(this.currentItem.trim().length <= 0) return
        this.itemService.add(this.currentItem)
        this.currentItem = ""
    }
}
