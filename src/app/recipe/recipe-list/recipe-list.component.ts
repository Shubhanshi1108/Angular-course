import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cold Coffee','This is a of hazelnut flavour','https://media.istockphoto.com/id/1303583671/photo/cup-glass-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.jpg?s=1024x1024&w=is&k=20&c=f-lsA-A5AKC8qdi0wp4sEoF1Ay7raH23M4T8xyHr0sY='),
    new Recipe('Cold Coffee','This is a of hazelnut flavour','https://media.istockphoto.com/id/1303583671/photo/cup-glass-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.jpg?s=1024x1024&w=is&k=20&c=f-lsA-A5AKC8qdi0wp4sEoF1Ay7raH23M4T8xyHr0sY=')
  ];

  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
