import{Component} from '@angular/core'

//metadata
@Component(
{
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
}
)

export class HomeComponents
{


    // Variable Decleration

userName:string='Hossam Omara';
age:number=27;
imgSrc:string='assets/Images/182468411_307655250982860_5411344496748745771_n (1).jpg'
onTrue:boolean=true;
styles1:object=
{
    color:'red',
    backgroundColor:'gray',
    fontFamily:'Cursive'
}

styles2:object=
{
    color:'green',
    backgroundColor:'orange',
    fontFamily:'Fantasy'
}




    //Constructor
    constructor()
    {


    }

    //Typescript Code

    welcome(eventInfo:any)
    {
        
        alert('Hello '+this.userName)
    }
    hello(eventInfo:any)
    {
        console.log(eventInfo)
        console.log(eventInfo.key)
        

    }



    

}


