import { Ingredient } from './../../shopping-list/ingredient.model';
import { Recipe } from './../../recpies/recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

    selectedRecipe = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('ماکارونی', 'http://via.placeholder.com/350x150', 
        'http://via.placeholder.com/350x150', 
        'خلاصه ای برای طرز تهیه ماکارونی با استفاده از مواد اولیه تازه',
        [new Ingredient('سیب زمینی', 3), new Ingredient('پیاز', 2)]),
        new Recipe('قرمه سبزی', 'http://via.placeholder.com/350x150',
         'http://via.placeholder.com/350x160', 
         'خلاصه ای برای طرز تهیه ماکارونی با استفاده از مواد اولیه تازه',
         [new Ingredient('سبزی', 1), new Ingredient('لوبیا', 10)]),
        new Recipe('قیمه بادمجان', 'http://via.placeholder.com/350x150',
         'http://via.placeholder.com/350x170',
          'خلاصه ای برای طرز تهیه ماکارونی با استفاده از مواد اولیه تازه',
          [new Ingredient('بادمجان', 1), new Ingredient('گوشت', 2)]),
        new Recipe('فسنجون', 'http://via.placeholder.com/350x150',
         'http://via.placeholder.com/350x180', 
         'خلاصه ای برای طرز تهیه ماکارونی با استفاده از مواد اولیه تازه',
         [new Ingredient('گردو', 5),  new Ingredient('رب انار', 2)])

    ];

    getRecipe(){
        return this.recipes.slice();
    }
}