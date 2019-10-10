import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DBConnect{
    addrecipetodb(recipe:any){
        //console.log("Recipe is added to db");
        //this.http.post('https://mayuri-tcs.firebaseio.com/recipe.json', recipe).subscribe(mydata=>{
          this.http.post('http://localhost:4000/posttasks', recipe).subscribe(mydata=>{
            console.log(mydata);
        })
    }
    loadrecipestoDB(){
       // console.log("Loaded in ts.");
         return this.http
          .get(' '
            //'https://mayuri-tcs.firebaseio.com/recipe.json'
          )
          .pipe(
            map(responseData => {
              const postsArray: any[] = [];
              for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                  postsArray.push({ ...responseData[key], id: key });
                }
              }
              return postsArray;
            })
          );
    }
    constructor(private http:HttpClient){
       }
}