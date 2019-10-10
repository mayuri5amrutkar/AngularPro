import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../../shared/recipe.service';
import { Recipe } from '../recipe';

@Component({
   selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  //recipe = new Recipe('Pan ', 'Delicious Pan Cakes', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcWsqMXFUnHcPDSFfRtmT7__QtbcnrjH4FaPUJzXxQZciyYJi_Q');

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
