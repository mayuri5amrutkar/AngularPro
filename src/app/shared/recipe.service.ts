import {Injectable} from '@angular/core';
import { Recipe } from '../recipes/recipe'

@Injectable()
export class RecipeService{
    
    private recipes : Recipe[] = 
         [new Recipe('Pan Cakes', 'Delicious Pan Cakes', '11/11/2019',new Date('11/12/2020'), 230, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcWsqMXFUnHcPDSFfRtmT7__QtbcnrjH4FaPUJzXxQZciyYJi_Q', 200),
         new Recipe('Pan Cakes', 'Delicious Pan Cakes', '11/11/2019',new Date('11/12/2020'), 230, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcWsqMXFUnHcPDSFfRtmT7__QtbcnrjH4FaPUJzXxQZciyYJi_Q', 150)];
        
    constructor(){
    }
    getRecipes(){
        return this.recipes;
    }
}

