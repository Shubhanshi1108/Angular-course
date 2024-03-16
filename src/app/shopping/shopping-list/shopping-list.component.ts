import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredients[];
  private ingredientChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredient();

    this.ingredientChangeSub = this.shoppingListService.ingredientChanged
      .subscribe(
        (ingredients: Ingredients[]) => {
          this.ingredients = ingredients;
        }
      );
  }
  ngOnDestroy() {
    this.ingredientChangeSub.unsubscribe();
  }

}
