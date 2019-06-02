import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TravelServiceService} from 'src/app/services/travel.service'
import { Travel } from 'src/app/classes/travel';
import { ToastController } from '@ionic/angular'; 

@Component({
  selector: 'app-display-travel',
  templateUrl: './display-travel.page.html',
  styleUrls: ['./display-travel.page.scss'],
})
export class DisplayTravelPage implements OnInit {
  public travId: number;
  public trav: Travel;

  constructor(private route: ActivatedRoute, 
              private travelService: TravelServiceService, 
              private router: Router, public toastController: ToastController) { }

  ngOnInit() {
    this.travId = Number(this.route.snapshot.paramMap.get('id'));
    this.trav = this.travelService.getTravel(this.travId);
  }
  
  delete(id: number) {
    try {
      this.travelService.deleteTravel(id);
      this.router.navigateByUrl('home/travels');
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
       message: 'Oups! Could not delete the travel ! Verify your entries ',       
       duration: 4000,       
       color: "danger"     
      });     
    toast.present();   
  }

}