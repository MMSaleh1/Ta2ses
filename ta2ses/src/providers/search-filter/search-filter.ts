import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SearchFilterProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SearchFilterProvider {
public suppliers :  suppliers[];
  constructor(public http: Http) {
     this.suppliers=[{
      items:[{ name: "plumbing 1",price : 10 ,amount:0},{name:"plumbing 2",price: 20,amount:0},{name:"plumbing 3",price :50,amount:0}],
      name: "plumbing",
      group: "plumbing",
      id : "1",
      image : "assets/img/plumbing.jpg"
    },
    {
      items:[{name: "electercity 1",price:15 ,amount:0 },{name :"electercity 2" , price : 30,amount:0},{name : "electercity 3", price : 40,amount:0}],
      name : "electercity",
      group : "electercity",
      id : "2",
      image : "assets/img/electercity.jpg"
    },
    {
      items:[{name: "painting 1",price:15 ,amount:0 },{name :"painting 2" , price : 30,amount:0},{name : "painting 3", price : 40,amount:0}],
      name : "painting",
      group : "painting",
      id : "3",
      image : "assets/img/painting.jpg"
    }
  ];
    
  }
   searchItems(searchTerm=""){
        if(searchTerm ==""){
          return this.suppliers;
        }else{
        return this.suppliers.filter((item) => {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });     
        }
    }

}
export interface suppliers{
  items : item[],
  group: string,
  name: string,
  id: string,
  image: string
}
export interface item{
    name:string,
    price : number ,
    amount : number
}