import { Component, Input } from "@angular/core";
import { ItemService } from "src/app/Services/ItemService";


@Component({
    selector: "ItemsList",
    templateUrl: "./ItemsList.template.html",
    styleUrls: ['./ItemsList.style.css']
})

export class ItemsListComponent{
    constructor(private itemService : ItemService){}

    @Input('size') chunkSize : string = ""

    public getItems(){
        return this.itemService.getAll()
    }
    public itemsAvailable(){
        return this.itemService.getAll().length > 0
    }
    public getChunked(){
        let size = parseInt(this.chunkSize)
        return this.itemService.getAllChunked(size)
    }
}