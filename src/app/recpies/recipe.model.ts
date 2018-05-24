import { Ingredient } from './../shopping-list/ingredient.model';
export class Recipe{
constructor(public title:string, public avatar:string,public backimage:string,public description:string, public ingredients:Ingredient[]){}   
}