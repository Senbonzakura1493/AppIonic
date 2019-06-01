import { Component } from '@angular/core';
import {Router, RouterEvent} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pages =[
    {
      title :'categories',
      url:'/home/categories'
    },
    {
      title :'travels',
      url:'/home/travels'
    }
  ];

  selectedPath ='';
  
  constructor(private router :Router) {

    this.router.events.subscribe((event:RouterEvent)=>{ //to catch the selected path
        this.selectedPath = event.url ;
    });
  }

}
