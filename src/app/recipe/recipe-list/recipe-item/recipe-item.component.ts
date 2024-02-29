import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../model/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  //input allow to bind this property from outside
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  onSelectedItem() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
