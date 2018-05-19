import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css']
})
export class RecpieListComponent implements OnInit {
  @Output() recipeSelected : EventEmitter<Recipe> = new EventEmitter<Recipe>()
    recipes : Recipe[] = [
    new Recipe('ماکارونی', 'http://via.placeholder.com/350x150','http://via.placeholder.com/350x150','خلاصه ای برای طرز تهیه ماکارونی با استفاده از مواد اولیه تازه'),
    new Recipe('قرمه سبزی', 'http://via.placeholder.com/350x150','http://via.placeholder.com/350x160','خلاصه ای برای طرز تهیه ماکارونی با استفاده از مواد اولیه تازه'),
    new Recipe('قیمه بادمجان', 'http://via.placeholder.com/350x150','http://via.placeholder.com/350x170','خلاصه ای برای طرز تهیه ماکارونی با استفاده از مواد اولیه تازه'),
    new Recipe('فسنجون', 'http://via.placeholder.com/350x150','http://via.placeholder.com/350x180','خلاصه ای برای طرز تهیه ماکارونی با استفاده از مواد اولیه تازه')
       
  ];

  constructor() { }

  ngOnInit() {
  }

  onEntekhabRecipe(event){
    this.recipeSelected.emit(event)
  }

}
