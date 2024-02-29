import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredients[]>();

  private ingredients: Ingredients[] = [
    new Ingredients('Coffee', 2),
    new Ingredients('Milk', 2)
  ];

  constructor() { }
  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addListOfIngredients(ingredients:Ingredients[]){
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }

    ///'...' this is spread operator used to spread a list into single elements
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
