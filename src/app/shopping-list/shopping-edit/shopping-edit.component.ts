import { Ingredient } from './../ingredient.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from '../../share/services/shopping-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingredientForm: FormGroup;
  editMode = false;
  ingredientIndex: number;
  editItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredientForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')])
    });
    this.shoppingListService.startedEditIngredientIndex.subscribe(
      (index: number) => {
        this.ingredientIndex = index;
        this.editMode = true;
        this.editItem = this.shoppingListService.getIngredientIndex(index);
        this.ingredientForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        })
      }
    )
  }
  onSubmit() {
    const name = this.ingredientForm.get('name').value;
    const amount = this.ingredientForm.get('amount').value;
    const ingredient = new Ingredient(name, amount);
    if (this.editMode) {
      this.shoppingListService.updatedIngredient(this.ingredientIndex, ingredient)
    } else {
      this.shoppingListService.addIngredient(name, amount)
    }
    this.editMode = false;
    this.ingredientForm.reset()
  }
  onClear() {
    this.editMode = false;
    this.ingredientForm.reset()
  }
  onDelete() {
    this.shoppingListService.deleteIngredient(this.ingredientIndex);
    this.onClear()
  }
}
