import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recpies',
  templateUrl: './recpies.component.html',
  styleUrls: ['./recpies.component.css']
})
export class RecpiesComponent implements OnInit {
  recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(event){
    this.recipe = event;   
  }
}
