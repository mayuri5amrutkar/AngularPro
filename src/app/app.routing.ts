import { RouterModule } from '@angular/router';
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

export const AppRouting = RouterModule.forRoot([
        {path: 'recipes', component:RecipesComponent},
        {path: 'shopping-list', component:ShoppingListComponent}
        
    ])