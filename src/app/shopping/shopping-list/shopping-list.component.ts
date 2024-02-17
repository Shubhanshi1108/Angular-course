import { Component } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredients[] = [
    new Ingredients('Coffee',2),
    new Ingredients('Milk',2)
  ];

  constructor(){}
}
