import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/classes/travel';
import { Category } from 'src/app/classes/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category.service';
import { TravelServiceService } from 'src/app/services/travel.service';
import { ToastController } from '@ionic/angular'; 


@Component({
  selector: 'app-modify-travel',
  templateUrl: './modify-travel.page.html',
  styleUrls: ['./modify-travel.page.scss'],
})
export class ModifyTravelPage implements OnInit {
  public travelId: number;
  public travel: Travel;
  public categories : Category[];
  public updatedTravel: Travel;
  
  constructor(private route: ActivatedRoute, 
    private categoryService: CategoryServiceService,
    private travelService: TravelServiceService, 
    private router: Router, public toastController: ToastController) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    this.travelId = Number(this.route.snapshot.paramMap.get('id'));
    this.travel = this.travelService.getTravel(this.travelId);
    
  }

  modify() {
    this.updatedTravel = new Travel(this.travel.id, 
                                        this.travel.title, 
                                        this.travel.destination,this.travel.resume,this.travel.dateTime,this.travel.placeToVisit,this.travel.category.id);
    if (this.updatedTravel.title !== undefined && this.updatedTravel.title !== "" &&
        this.updatedTravel.destination!== undefined && this.updatedTravel.destination !== "" &&
        this.updatedTravel.resume!== undefined && this.updatedTravel.resume !== "" &&
        this.updatedTravel.placeToVisit!== undefined && this.updatedTravel.placeToVisit !== ""
                                      )
        {
          this.travelService.putTravel(this.updatedTravel);
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
       message: 'Successfully modified!',       
       duration: 2000,       
       color: "success"     
      });     
    toast.present();   
  }
  
  async failMessage() {    
    const toast = await this.toastController.create({      
       message: 'Oups! Could not modify the travel ! Verify your entries ',       
       duration: 4000,       
       color: "danger"     
      });     
    toast.present();   
  }

}
