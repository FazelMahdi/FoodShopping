import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../share/services/shopping-list.service';
import { Ingredient } from './ingredient.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  ingreidentUnSubscribe: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredient()
    this.ingreidentUnSubscribe = this.shoppingListService.addIngredientEvent.subscribe(
      (ingredients: Ingredient[]) =>{
        this.ingredients = ingredients
      }
    )
  }
  ngOnDestroy(){
    this.ingreidentUnSubscribe.unsubscribe();
  }

}


// .bdaia-header-default .header-container {
//   display: none;
// }
