import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DisplayTravelPage } from './display-travel.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayTravelPage
  },
  { 
    path: 'modifyTravel/:id', 
    loadChildren: '../modify-travel/modify-travel.module#ModifyTravelPageModule' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DisplayTravelPage]
})
export class DisplayTravelPageModule {}
