import { RecipeService } from './../share/services/recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
  
@Component({
  selector: 'app-recpies',
  templateUrl: './recpies.component.html',
  styleUrls: ['./recpies.component.css'],
  providers: [RecipeService]
})
export class RecpiesComponent implements OnInit {
  recipeForSend: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => {
        this.recipeForSend = recipe
      }
    )
  }


}
