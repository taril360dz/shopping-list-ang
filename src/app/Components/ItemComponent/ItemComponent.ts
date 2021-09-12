import { Component, Input } from "@angular/core";
import { ItemService } from "src/app/Services/ItemService";

@Component({
    selector:'ItemElement',
    templateUrl: './Item.template.html',
    styleUrls: ['./Item.style.css']
})

export class ItemComponent
{
    @Input('item') item : {id:number, name:string, bought:boolean} = {id:0,name:'',bought:false}
    constructor(private itemSerive : ItemService){}

    confirmBuy(){
        this.itemSerive.updateBoughtStatus(this.item)
    }
    confirmDelete(){
        this.itemSerive.delete(this.item)
    }
}

