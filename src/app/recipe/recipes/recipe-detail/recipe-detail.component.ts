import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../../model/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  // to set recipe from outside
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    //we didnt added index in this because currently we are at any particular index so 
    //{route is like:https//localhost:4200/recipes/1}

    this.router.navigate(['edit'], { relativeTo: this.route });
   // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });  //more complex one as we go up one level
    //by adding above route becomes https//localhost:4200/recipes/1/edit


  }
}
