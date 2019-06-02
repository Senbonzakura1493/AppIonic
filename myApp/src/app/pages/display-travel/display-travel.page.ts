import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TravelServiceService} from 'src/app/services/travel.service'
import { Travel } from 'src/app/classes/travel';

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
              private router: Router) { }

  ngOnInit() {
    this.travId = Number(this.route.snapshot.paramMap.get('id'));
    this.trav = this.travelService.getTravel(this.travId);
  }
  
  delete(id: number) {
    this.travelService.deleteTravel(id);
    this.router.navigateByUrl('travels');
  }

}