import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.page.html',
  styleUrls: ['./create-category.page.scss'],
})
export class CreateCategoryPage implements OnInit {

  public newCategory = new Category(this.categoryService.Id + 1, '', '');
  constructor(private route: ActivatedRoute, 
    private categoryService: CategoryServiceService, 
    private router: Router) { }

  ngOnInit() {
  }

  add() {
    this.categoryService.postCategory(this.newCategory);
    this.router.navigateByUrl('home/categories');
  }
}
