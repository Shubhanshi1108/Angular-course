import { Host, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RecipesComponent } from './recipe/recipes/recipes.component';

const routes: Routes = [];



const route:Routes=[
  {path:'/shopping-list',component:ShoppingListComponent},
  {path:'/recipes',component:RecipesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
