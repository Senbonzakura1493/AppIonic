import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CategoryServiceService} from 'src/app/services/category.service'
import { Category } from 'src/app/classes/category';
import { ToastController } from '@ionic/angular'; 

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
              private router: Router,public toastController: ToastController) { }

  ngOnInit() {
    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));
    this.category = this.categoryService.getCategory(this.categoryId);
  }
  
  delete(id: number) {
    try 
    {
    this.categoryService.deleteCategory(id);
    this.router.navigateByUrl('categories');
    this.succesMessage();
    }
    catch{
      this.failMessage();
    }

  }

   /*toast messages*/
   async succesMessage() {    
    const toast = await this.toastController.create({      
       message: 'Successfully deleted!',       
       duration: 2000,       
       color: "success"     
      });     
    toast.present();   
  }
  
  async failMessage() {    
    const toast = await this.toastController.create({      
       message: 'Oups! Could not delete the category ! Verify your entries ',       
       duration: 4000,       
       color: "danger"     
      });     
    toast.present();   
  }
}
