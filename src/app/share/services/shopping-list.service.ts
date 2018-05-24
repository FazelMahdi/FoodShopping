import { Ingredient } from './../../shopping-list/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{

    addIngredientEvent = new EventEmitter<Ingredient[]>();
    
    ingredients: Ingredient[] =[
        new Ingredient('ماکارونی', 2),
        new Ingredient('پیاز', 1)
      ]

      getIngredient(){
          return this.ingredients.slice()
      }

      addIngredient(name:string, amount:number){
          this.ingredients.push(  new Ingredient(name, amount))
          this.addIngredientEvent.emit(this.ingredients)
      }
}