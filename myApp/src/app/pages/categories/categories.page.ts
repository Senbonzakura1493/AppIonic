import { Component, OnInit } from '@angular/core';
import {CategoryServiceService} from 'src/app/services/category.service'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  categories = [];
  constructor(private categoryService: CategoryServiceService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

}
