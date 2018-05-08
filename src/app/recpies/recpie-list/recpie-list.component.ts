import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css']
})
export class RecpieListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('ماکارونی', 'http://via.placeholder.com/350x150','http://via.placeholder.com/350x150','خلاصه ای برای طرز تهیه ماکارونی با استفاده از مواد اولیه تازه'),
    new Recipe('ماکارونی', 'http://via.placeholder.com/350x150','http://via.placeholder.com/350x150','خلاصه ای برای طرز تهیه ماکارونی با استفاده از مواد اولیه تازه'),
    new Recipe('ماکارونی', 'http://via.placeholder.com/350x150','http://via.placeholder.com/350x150','خلاصه ای برای طرز تهیه ماکارونی با استفاده از مواد اولیه تازه'),
    new Recipe('ماکارونی', 'http://via.placeholder.com/350x150','http://via.placeholder.com/350x150','خلاصه ای برای طرز تهیه ماکارونی با استفاده از مواد اولیه تازه')
    
    
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
