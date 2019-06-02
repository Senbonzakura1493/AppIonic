import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CategoryServiceService} from 'src/app/services/category.service'
import { Category } from 'src/app/classes/category';

@Component({
  selector: 'app-display-category',
  templateUrl: './display-category.page.html',
  styleUrls: ['./display-category.page.scss'],
})
export class DisplayCategoryPage implements OnInit {
  public categoryId: number;
  public category: Category;

  constructor(private route: ActivatedRoute, 
              private categoryService: CategoryServiceService, 
              private router: Router) { }

  ngOnInit() {
    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));
    this.category = this.categoryService.getCategory(this.categoryId);
  }
  
  

}
