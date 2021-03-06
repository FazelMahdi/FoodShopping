import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from './../../share/services/recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recpie-detail',
  templateUrl: './recpie-detail.component.html',
  styleUrls: ['./recpie-detail.component.css']
})
export class RecpieDetailComponent implements OnInit {
  recipedetail: Recipe;
  id: number;

  constructor(private recipeServie: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipedetail = this.recipeServie.getRecipesDetail(this.id)
      }
    );
  }

  addToShoppingList(){
    this.recipeServie.addIngreToShopping(this.recipedetail.ingredients)
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
}
