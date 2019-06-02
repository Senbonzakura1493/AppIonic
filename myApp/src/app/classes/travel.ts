import { Category } from './category';


export class Travel {
    public id: number;
    public title: string;
    public destination : string;
    public resume: string;
    public dateTime: string;
    public placeToVisit : string ;

    public category: Category;

    constructor(id: number, title: string, destination : string,resume: string,
       dateTime: string,placeToVisit : string,category: Category)
    {
        this.id = id;
        this.title = title;
        this.destination = destination;
        this.resume = resume;
        this.dateTime = dateTime;
        this.placeToVisit = placeToVisit ;
    }

}
