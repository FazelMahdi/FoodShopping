import { RecipeService } from './../../share/services/recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeEditComponent } from '../recipe-edit/recipe-edit.component';

@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css']
})
export class RecpieListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe()
  }

  onAddRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
  

}
