export class ItemService{
    private idTracker : number = -1
    private items : {id:number, name:string, bought:boolean}[] = []


    public getAll(){
        return this.items
    }
    public add(_name : string){
        this.idTracker++
        this.items.push({
            id:this.idTracker,
            name:_name,
            bought:false
        })
    }
    public find(item : {id:number, name:string, bought:boolean}){
        return this.items.find(e => item == e)
    }
    private update(item : {id:number, name:string, bought:boolean}, newValue : {name:string | undefined , bought:boolean | undefined}){
        let index = this.findIndex(item)
        if(index < 0) throw new Error("UPDATE : Index of the item not found")
        if(newValue.name != undefined)
            this.items[index].name = newValue.name
        if(newValue.bought != undefined)
            this.items[index].bought = newValue.bought
        return this.items[index]
    }

    public updateBoughtStatus(item : {id:number, name:string, bought:boolean}){
       this.update(item, {name:undefined, bought:!item.bought})
    }

    private findIndex(item : {id:number, name:string, bought:boolean}){
        return this.items.findIndex((e)=> item == e)
    }

    public delete(item : {id:number, name:string, bought:boolean}){
        let getIndex = this.findIndex(item)
        if(getIndex < 0) throw new Error("DELETE : Index of the item not found")
        let element  = this.items[getIndex]
        this.items.splice(getIndex, 1)
        return element
    }

    public getAllChunked(chunkSize : number){
        const original = this.getAll()
        const chunkedArray = []
        for(let chunk = 0; chunk < original.length; chunk += chunkSize){
            chunkedArray.push(original.slice(chunk, chunk + chunkSize))
        }
        return chunkedArray
    }


}