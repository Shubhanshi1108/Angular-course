import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];

  constructor(private shoppingListService: ShoppingListService) { }
  ngOnInit(): void {
    this.ingredients= this.shoppingListService.getIngredient();
    this.shoppingListService.ingredientChanged.subscribe(
      (ingredients:Ingredients[])=>{
        this.ingredients= ingredients;
      }
    );
  }

  
}
