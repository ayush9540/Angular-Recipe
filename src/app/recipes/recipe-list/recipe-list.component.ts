import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Recipe Discription', 'https://coastguard.dodlive.mil/files/2014/11/photo-1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
