import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category.service';
import { ToastController } from '@ionic/angular'; 

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.page.html',
  styleUrls: ['./create-category.page.scss'],
})
export class CreateCategoryPage implements OnInit {

  public newCategory = new Category(this.categoryService.Id + 1, '', '');
  constructor(private route: ActivatedRoute, 
    private categoryService: CategoryServiceService, 
    private router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  add() {

    if (this.newCategory.name !== undefined && this.newCategory.name.length !== 0){
      this.categoryService.postCategory(this.newCategory);
      this.router.navigateByUrl('home/categories');
      this.succesMessage();
    }
    else{
        this.failMessage();
    }
    
  }

  /*toast messages*/
  async succesMessage() {    
    const toast = await this.toastController.create({      
       message: 'Category added successfully !',       
       duration: 4000,       
       color: "success"     
      });     
    toast.present();   
  }
  async failMessage() {    
    const toast = await this.toastController.create({      
       message: 'Oups! Could not add the category ! Verify your entries ',       
       duration: 4000,       
       color: "danger"     
      });     
    toast.present();   
  }
  
}
