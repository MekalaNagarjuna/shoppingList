import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Item} from "../item";
import {DataService} from "../data.service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

  shoppingList:Item[]=[];
  selectedItem:Item;
  toggleForm:boolean=false;
//   var newItem:Item={
//     itemName:string,
//     itemQuantity:number,
//     itemBought:false
// }
 //item:Item[]=[];
//   itemName:string;
//   itemQuantity:number;
//   itemBought:false;

  constructor(public dataService:DataService,private cd: ChangeDetectorRef) { }

  getItems(){
    this.dataService.getShoppingItems().subscribe(items=>{
      this.shoppingList=items['items'];
      //console.log("Data from the shoppingList:" +this.shoppingList[0].itemName);
    })
  }

  addItem(form){
    var newItem={
      itemName:form.value.itemName,
      itemQuantity:form.value.itemQuantity,
      itemBought:false

    };
    this.dataService.addShoopingItem(newItem).subscribe(item=>{
      this.shoppingList.push(item['item']);
      this.getItems();
    })




  }

  deleteItem(id){
    let findIndexValue;
    this.dataService.deleteShoppingItem(id).subscribe(data=>{
      if(data['msg'].n==1){
        // for(var i=0;i<this.shoppingList.length;i++){
        //   if(this.shoppingList[i]._id==id){
        //     this.shoppingList.splice(i,1);
        //     this.cd.detectChanges();
        //   }
        // }
        findIndexValue = this.shoppingList.findIndex(item=>item._id === id);
        if(findIndexValue!==-1){
          this.shoppingList.splice(findIndexValue,1);
        }

      }
    })
  }

  editItem(form){
    var newItem={
      _id:this.selectedItem._id,
      itemName:form.value.itemName,
      itemQuantity:form.value.itemQuantity,
      itemBought:this.selectedItem.itemBought
    };
    this.dataService.updateShoppingItem(newItem).subscribe(result=>{
      this.getItems();
    })
    this.toggleForm=!this.toggleForm;
  }

  showEditForm(item){
    this.selectedItem=item;
    this.toggleForm=!this.toggleForm;

  }

  updateItemCheckbox(item){
    item.itemBought=!item.itemBought;
    this.dataService.updateShoppingItem(item).subscribe(result=>{
      this.getItems();
    })
  }

  ngOnInit() {
    this.getItems();

  }

}
