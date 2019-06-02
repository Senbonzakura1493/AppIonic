import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/classes/travel';
import { Category } from 'src/app/classes/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category.service';
import { TravelServiceService } from 'src/app/services/travel.service';
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
    private router: Router) { }

  ngOnInit() {
    this.travelId = Number(this.route.snapshot.paramMap.get('id'));
    this.travel = this.travelService.getTravel(this.travelId);
    this.categories = this.categoryService.getCategories();
  }

  modify() {
    this.updatedTravel = new Travel(this.travel.id, 
                                        this.travel.title, 
                                        this.travel.destination,this.travel.resume,this.travel.dateTime,this.travel.placeToVisit,this.travel.category);
    this.travelService.putTravel(this.updatedTravel);

    this.router.navigateByUrl('/home/travels');
  }

}
