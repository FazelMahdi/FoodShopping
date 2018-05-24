import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from '../../share/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputAmount') inputAmount: ElementRef;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

  }
  addIngredient(){
    const name = this.inputName.nativeElement.value;
    const amount = this.inputAmount.nativeElement.value;
    this.shoppingListService.addIngredient(name, amount)
  }

}
