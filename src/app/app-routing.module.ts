import { Host, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RecipesComponent } from './recipe/recipes/recipes.component';
import { RecipeStartComponent } from './recipe/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'shopping-list', component: ShoppingListComponent },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
