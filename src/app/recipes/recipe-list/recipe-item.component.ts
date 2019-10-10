import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
   selector: 'rb-recipe-item',
  templateUrl: 'recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeId: number;
  
  @Input()
    totalLikes = 0;
  @Input()
    totalLikes1 = 0;
    @Input()
    ratings = false;
    
    onClick(){
        this.ratings = !this.ratings;
        this.totalLikes += this.ratings ? 1 : -1; 
    }

  constructor() {}

  ngOnInit() {
  }

}
