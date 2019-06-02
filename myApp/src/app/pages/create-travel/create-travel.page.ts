import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/classes/travel';
import { Category } from 'src/app/classes/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category.service';
import { TravelServiceService } from 'src/app/services/travel.service';
@Component({
  selector: 'app-create-travel',
  templateUrl: './create-travel.page.html',
  styleUrls: ['./create-travel.page.scss'],
})
export class CreateTravelPage implements OnInit {
  public travel: Travel;
  public categories : Category[];
  
  constructor(private route: ActivatedRoute, 
    private categoryService: CategoryServiceService,
    private travelService: TravelServiceService, 
    private router: Router) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    
  }
  add() {
    this.travelService.postTravel(this.travel);
    this.router.navigateByUrl('/home/travels');
  }

}
