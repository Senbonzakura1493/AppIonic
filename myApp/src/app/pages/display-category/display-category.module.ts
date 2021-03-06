import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DisplayCategoryPage } from './display-category.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayCategoryPage
  },
  { 
    path: 'modifyCategory/:id', 
    loadChildren: '../modify-category/modify-category.module#ModifyCategoryPageModule' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DisplayCategoryPage]
})
export class DisplayCategoryPageModule {}
