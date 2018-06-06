import { RecipeService } from './../../share/services/recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recpie-detail',
  templateUrl: './recpie-detail.component.html',
  styleUrls: ['./recpie-detail.component.css']
})
export class RecpieDetailComponent implements OnInit {
  @Input() recipedetail: Recipe;
  constructor(private recipeServie: RecipeService) { }

  ngOnInit() {
  }

  addToShoppingList(){
    this.recipeServie.addIngreToShopping(this.recipedetail.ingredients)
  }
}
