import { Ingredient } from './../../shopping-list/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService{

    addIngredientEvent = new Subject<Ingredient[]>();
    startedEditIngredientIndex = new Subject<number>();
    ingredients: Ingredient[] =[
        new Ingredient('ماکارونی', 2),
        new Ingredient('پیاز', 1)
      ]

      getIngredient(){
          return this.ingredients.slice()
      }

      getIngredientIndex(index){
          return this.ingredients[index];
      }

      addIngredient(name:string, amount:number){
          this.ingredients.push(new Ingredient(name, amount))
          this.addIngredientEvent.next(this.ingredients.slice())
      }
      addIngreFromRecipe(ingredients: Ingredient[]){
          this.ingredients.push(...ingredients)
          this.addIngredientEvent.next(this.ingredients.slice())
      }

      updatedIngredient(index: number, newIgredient: Ingredient){
        this.ingredients[index] = newIgredient;
        this.addIngredientEvent.next(this.ingredients.slice())
      }

      deleteIngredient(index: number){
        this.ingredients.splice(index,1);
        this.addIngredientEvent.next(this.ingredients)
      }


}