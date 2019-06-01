import { Component, OnInit } from '@angular/core';
import {TravelServiceService} from 'src/app/services/travel.service'

@Component({
  selector: 'app-travels',
  templateUrl: './travels.page.html',
  styleUrls: ['./travels.page.scss'],
})
export class TravelsPage implements OnInit {

  travels =[];
  constructor(private travelService: TravelServiceService) { }

  ngOnInit() {
    this.travels = this.travelService.getTravels();
  }

}
