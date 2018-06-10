import { Ingredient } from './../../shopping-list/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService{

    addIngredientEvent = new Subject<Ingredient[]>();
    
    ingredients: Ingredient[] =[
        new Ingredient('ماکارونی', 2),
        new Ingredient('پیاز', 1)
      ]

      getIngredient(){
          return this.ingredients.slice()
      }

      addIngredient(name:string, amount:number){
          this.ingredients.push(  new Ingredient(name, amount))
          this.addIngredientEvent.next(this.ingredients.slice())
      }
      addIngreFromRecipe(ingredients: Ingredient[]){
          this.ingredients.push(...ingredients)
          this.addIngredientEvent.next(this.ingredients.slice())
      }


}