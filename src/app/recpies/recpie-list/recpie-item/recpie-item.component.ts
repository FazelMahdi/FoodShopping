import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../../share/services/recipe.service';

@Component({
  selector: 'app-recpie-item',
  templateUrl: './recpie-item.component.html',
  styleUrls: ['./recpie-item.component.css']
})
export class RecpieItemComponent implements OnInit {
  @Input() recipeFromList: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelectedRecipe(){
    this.recipeService.selectedRecipe.emit(this.recipeFromList);
    }
}
