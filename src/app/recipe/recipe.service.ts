import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './model/recipe.model';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  //we added private so that it cannot be accessed directly from outside
  private recipes: Recipe[] = [
    new Recipe('Cold Coffee', 'This is a of Classic flavour', 'https://media.istockphoto.com/id/1303583671/photo/cup-glass-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.jpg?s=1024x1024&w=is&k=20&c=f-lsA-A5AKC8qdi0wp4sEoF1Ay7raH23M4T8xyHr0sY=',
    [
      new Ingredients('Milk',1),
      new Ingredients('Sugar',2),
      new Ingredients('Coffee Powder',2)
    ]),
    new Recipe('Hazelnut Cold Coffee', 'This is a of hazelnut flavour', 'https://media.istockphoto.com/id/1303583671/photo/cup-glass-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.jpg?s=1024x1024&w=is&k=20&c=f-lsA-A5AKC8qdi0wp4sEoF1Ay7raH23M4T8xyHr0sY=',[
      new Ingredients('Milk',1),
      new Ingredients('Sugar',2),
      new Ingredients('Coffee Powder',2),
      new Ingredients('Hazelnut syrup',2)
    ]),
    
  ];
  constructor(private slService:ShoppingListService) { }

  getRecipe() {
    //added slice so that we get copy of the array not the actual array
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients:Ingredients[]){
    this.slService.addListOfIngredients(ingredients);
  }

}
