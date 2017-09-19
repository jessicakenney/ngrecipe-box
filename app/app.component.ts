import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1> Recipe Box</h1>
    <h3> {{currentFocus}} </h3>
    <h4> {{month}}/{{day}}/{{year}} </h4>
      <div *ngFor = "let thisRecipe of recipes" >
          <h4> {{thisRecipe.title}} </h4>
          <h5> Ingredients: </h5>
            <li *ngFor = "let ingredient of thisRecipe.ingredients">{{ingredient}}</li>
          <h5> Directions: </h5>
            <li *ngFor = "let direction of thisRecipe.directions">{{direction}}</li>
      </div>
      <br>
  </div>
  `
})

export class AppComponent{
  currentFocus: string = 'Angular Flavor';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  recipes : Recipe[] = [
    new Recipe('Cake',['eggs','flour','sugar'],['1.measure','2.mix','3.bake']),
    new Recipe('Scrambled Eggs',['eggs','milk','S+P'],['1.crack','2.beat','3.scramble']),
    new Recipe('Bread',['flour','water','yeast','honey'],['1.mix','2.knead','3.rise','4.bake'])
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients : String[], public directions : String []){}
}
