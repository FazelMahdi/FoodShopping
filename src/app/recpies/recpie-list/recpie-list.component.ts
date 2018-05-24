import { RecipeService } from './../../share/services/recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css']
})
export class RecpieListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe()

  }

}
