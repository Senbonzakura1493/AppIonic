import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/classes/travel';
import { Category } from 'src/app/classes/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category.service';
import { TravelServiceService } from 'src/app/services/travel.service';
import { ToastController } from '@ionic/angular'; 

@Component({
  selector: 'app-create-travel',
  templateUrl: './create-travel.page.html',
  styleUrls: ['./create-travel.page.scss'],
})
export class CreateTravelPage implements OnInit {
  public travel = new Travel(1,'','','','','',1); //default values
  public categories : Category[];
  
  constructor(private route: ActivatedRoute, 
    private categoryService: CategoryServiceService,
    private travelService: TravelServiceService, 
    private router: Router, public toastController: ToastController) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    
  }

  add() {
    this.travel = new Travel(this.travel.id, 
                                        this.travel.title, 
                                        this.travel.destination,this.travel.resume,this.travel.dateTime,this.travel.placeToVisit,this.travel.category.id);
    if (this.travel.title !== undefined && this.travel.title !== "" &&
          this.travel.destination!== undefined && this.travel.destination !== "" &&
          this.travel.resume!== undefined && this.travel.resume !== "" &&
          this.travel.placeToVisit!== undefined && this.travel.placeToVisit !== ""
        )
        {
          this.travelService.postTravel(this.travel);
          this.router.navigateByUrl('/home/travels');
          this.succesMessage();
        }
    else{
      this.failMessage();
    }
    
  }
  /*toast messages*/
  async succesMessage() {    
    const toast = await this.toastController.create({      
       message: 'Travel added successfully !',       
       duration: 2000,       
       color: "success"     
      });     
    toast.present();   
  }
  async failMessage() {    
    const toast = await this.toastController.create({      
       message: 'Oups! Could not add the travel ! Verify your entries ',       
       duration: 4000,       
       color: "danger"     
      });     
    toast.present();   
  }
}
