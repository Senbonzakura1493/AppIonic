import { Injectable } from '@angular/core';
import { Travel } from 'src/app/classes/travel';
import { Category } from 'src/app/classes/category';
import { CategoryServiceService } from 'src/app/services/category.service';

@Injectable({
  providedIn: 'root'
})
export class TravelServiceService {
  
  public Id = 3;

  private travels: Travel[] = [
    new Travel(1,"Les pyramides mayas !","Mexique","test1","test1","test1",1),
    new Travel(2, "Succombez au sourire de la Joconde","Paris","test2","test2","test2",2), 
    new Travel(3,"Des plages magnifiques !", "Thailande","test3","test3","test3",3)
  ];

  constructor() {

   }

  getTravels(): Travel[] { 
    return this.travels;
  }

  getTravel(id: number): Travel {
    let trav: Travel;
    this.travels.forEach(travel => {
      if (travel.id === id) {
          trav =  travel;
      }
    });

    return trav;
  }

  deleteTravel(id: number) {
    this.travels.forEach((travel, i) => {
      if (travel.id === id) {
        this.travels.splice(i, 1);
      }
    });
  }

  putTravel(newTravel: Travel) {
    this.travels.forEach((travel, i) => {
      if (travel.id == newTravel.id) {
        this.travels[i] = newTravel;
      }
    });
  }

  postTravel(newTravel: Travel) {
    this.travels.push(newTravel);
    this.Id ++; 
  }

  
}
