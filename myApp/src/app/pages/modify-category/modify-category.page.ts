import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category.service';
@Component({
  selector: 'app-modify-category',
  templateUrl: './modify-category.page.html',
  styleUrls: ['./modify-category.page.scss'],
})
export class ModifyCategoryPage implements OnInit {
  public categoryId: number;
  public category: Category;

  public updatedCategory: Category;

  constructor(private route: ActivatedRoute, 
    private categoryService: CategoryServiceService, 
    private router: Router) { }

  ngOnInit() {
    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));
    this.category = this.categoryService.getCategory(this.categoryId);
  }

  modify() {
    this.updatedCategory = new Category(this.category.id, 
                                        this.category.name, 
                                        this.category.description);
    this.categoryService.putCategory(this.updatedCategory);
    this.router.navigateByUrl('categories');
  }

}
