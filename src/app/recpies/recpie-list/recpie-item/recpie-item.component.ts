import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recpie-item',
  templateUrl: './recpie-item.component.html',
  styleUrls: ['./recpie-item.component.css']
})
export class RecpieItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() selectedRecipe : EventEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(){
    this.selectedRecipe.emit(this.recipe);
    }
}
