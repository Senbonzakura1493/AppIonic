import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CategoriesPage } from './categories.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPage
  },
  { 
    path: 'displayCategory/:id', 
    loadChildren: '../display-category/display-category.module#DisplayCategoryPageModule' 
  },
  { 
    path: 'createCategory', 
    loadChildren: '../create-category/create-category.module#CreateCategoryPageModule' 
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoriesPage]
})
export class CategoriesPageModule {}
