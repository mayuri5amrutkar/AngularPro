import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeBookAppComponent } from "./recipe-book.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item.component";
import { RecipeService } from './shared/recipe.service';
import { ChildModule } from './child.module';
import { SharedModule } from './shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DBConnect } from './shared/dbconnect.service';


@NgModule({
  declarations: [
    RecipeBookAppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule, ChildModule, FormsModule, SharedModule, HttpClientModule
  ],
  providers: [RecipeService, DBConnect],
  bootstrap: [RecipeBookAppComponent]
})
export class AppModule {}
