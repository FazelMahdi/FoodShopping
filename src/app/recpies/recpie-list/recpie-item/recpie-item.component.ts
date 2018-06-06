import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recpie-item',
  templateUrl: './recpie-item.component.html',
  styleUrls: ['./recpie-item.component.css']
})
export class RecpieItemComponent implements OnInit {
  @Input() recipeFromList: Recipe;
  @Input() index: number;

  ngOnInit() {
  }

}
