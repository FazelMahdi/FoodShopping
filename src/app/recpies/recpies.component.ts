import { RecipeService } from './../share/services/recipe.service';
import { Component, OnInit } from '@angular/core';
  
@Component({
  selector: 'app-recpies',
  templateUrl: './recpies.component.html',
  styleUrls: ['./recpies.component.css'],
  providers: [RecipeService]
})
export class RecpiesComponent implements OnInit {
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }


}
