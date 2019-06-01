import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { HomePage } from './home.page';
const routes : Routes =[
  {
    path :'home',
    component :HomePage,
    children :[
      { path: 'categories', loadChildren: '../categories/categories.module#CategoriesPageModule' },
      { path: 'travels', loadChildren: '../travels/travels.module#TravelsPageModule' },
    ]
  },
  { 
    path:'',
    redirectTo:'home/categories'
  },
  
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
