import { Injectable } from '@angular/core';
import { Category } from 'src/app/classes/category'

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  
  public Id = 3;

  private categories: Category[] = [
    new Category(1, "Aventure","La vie est une aventure audacieuse"),
    new Category(2, "Arts","L'art est éternel"),
    new Category(3, "Plage et soleil","Life is better at the beach")
  ]
  constructor() { }

  getCategories(): Category[] {
    return this.categories;
  }

  getCategory(id: number): Category {
    let cat: Category;
    this.categories.forEach(category => {
      if (category.id === id) {
          cat =  category;
      }
    });

    return cat;
  }

  deleteCategory(id: number) {
    this.categories.forEach((category, i) => {
      if (category.id === id) {
        this.categories.splice(i, 1);
      }
    });
  }

  postCategory(newCategory: Category) {
    this.categories.forEach((category, i) => {
      if (category.id == newCategory.id) {
        this.categories[i] = newCategory;
      }
    });
  }

  putCategory(newCategory: Category) {
    this.categories.push(newCategory);
    this.Id ++; 
  }

  
}
