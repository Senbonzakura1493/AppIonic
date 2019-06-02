import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category.service';
import { ToastController } from '@ionic/angular'; 

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
    private router: Router, public toastController: ToastController) { }

  ngOnInit() {
    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));
    this.category = this.categoryService.getCategory(this.categoryId);
  }

  modify() {

      this.updatedCategory = new Category(this.category.id, 
                                          this.category.name, 
                                          this.category.description);
      if (this.updatedCategory.name !== undefined && this.updatedCategory.name !== "" &&
          this.updatedCategory.description !== undefined && this.updatedCategory.description !== ""
          )
        
        {
        this.categoryService.putCategory(this.updatedCategory);
        this.router.navigateByUrl('categories');
        this.succesMessage();
      }
      else{
        this.failMessage();
      }
  }

  /*toast messages*/
  async succesMessage() {    
    const toast = await this.toastController.create({      
       message: 'Successfully modified!',       
       duration: 2000,       
       color: "success"     
      });     
    toast.present();   
  }
  
  async failMessage() {    
    const toast = await this.toastController.create({      
       message: 'Oups! Could not modify the category ! Verify your entries ',       
       duration: 4000,       
       color: "danger"     
      });     
    toast.present();   
  }
}
