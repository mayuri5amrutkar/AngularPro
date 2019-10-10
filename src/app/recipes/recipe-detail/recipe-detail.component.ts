import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Recipe } from "../recipe";
import { DBConnect } from 'src/app/shared/dbconnect.service';

@Component({
   selector: 'rb-recipe-detail',
  templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
loadedPosts : any[] = [];
    addRecipe(nf:NgForm){
        //console.log("Recipe added", nf.value);
        this.db.addrecipetodb(nf.value);
         }
         loadrecipes(){
             //console.log("Loaded!!!");
             this.db.loadrecipestoDB().subscribe(posts=>{
                 this.loadedPosts=posts
             })
             console.log(this.loadedPosts);
         }
  constructor(private db:DBConnect) {}

  ngOnInit() {
  }

}
