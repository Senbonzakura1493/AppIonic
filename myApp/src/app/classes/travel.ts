import { Category } from './category';
import { CategoryServiceService } from 'src/app/services/category.service';

export class Travel {
    private categoriesServ: CategoryServiceService = new CategoryServiceService();


    public id: number;
    public title: string;
    public destination : string;
    public resume: string;
    public dateTime: string;
    public placeToVisit : string ;

    public category: Category;

    constructor(id: number, title: string, destination : string,resume: string,
       dateTime: string,placeToVisit : string,category: number)
    {
        this.id = id;
        this.title = title;
        this.destination = destination;
        this.resume = resume;
        this.dateTime = dateTime;
        this.placeToVisit = placeToVisit ;
        this.category = this.categoriesServ.getCategory(category);
    }

}
