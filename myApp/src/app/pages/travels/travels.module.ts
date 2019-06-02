import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TravelsPage } from './travels.page';

const routes: Routes = [
  {
    path: '',
    component: TravelsPage
  },
  { 
    path: 'displaytravel/:id', 
    loadChildren: '../display-travel/display-travel.module#DisplayTravelPageModule' 
  },
    
  { 
    path: 'create-travel', 
    loadChildren: '../create-travel/create-travel.module#CreateTravelPageModule' },

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TravelsPage]
})
export class TravelsPageModule {}
