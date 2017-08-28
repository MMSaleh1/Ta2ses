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
      items:[{ name: "plumbing 1",price : 10 ,amount:0,image:"assets/img/plumbing1.jpg"},{name:"plumbing 2",price: 20,amount:0,image:"assets/img/plumbing2.jpg"},{name:"plumbing 3",price :50,amount:0,image:"assets/img/plumbing3.jpg"}],
      name: "Al-Ahram",
      group: "plumbing",
      id : "1",
      image : "assets/img/plumbing.jpg",
      desc : ''
    },
    {
    items:[{ name: "plumbing 1",price : 10 ,amount:0,image:"assets/img/plumbing1.jpg"},{name:"plumbing 2",price: 20,amount:0,image:"assets/img/plumbing2.jpg"},{name:"plumbing 3",price :50,amount:0,image:"assets/img/plumbing3.jpg"}],
    name: "AquaTherm",
    group: "plumbing",
    id : "2",
    image : "assets/img/aquatherm.jpg",
    desc : ""
  },
  {
  items:[{ name: "plumbing 1",price : 10 ,amount:0,image:"assets/img/plumbing1.jpg"},{name:"plumbing 2",price: 20,amount:0,image:"assets/img/plumbing2.jpg"},{name:"plumbing 3",price :50,amount:0,image:"assets/img/plumbing3.jpg"}],
  name: "El-Sharef",
  group: "plumbing",
  id : "3",
  image : "assets/img/El-Sharef.jpg",
  desc : `Al-sharef Company is one of the leading companies in the field of manufacturing plastic pipes of all kinds. 30% of its total production capacity for 12 Arab and African countries.
       The company was established for the purpose of serving the community in the first place. It is the locomotive that trains the development train by providing the needs of infrastructure projects from all countries of large pipes, drinking water and sanitation networks, urban development projects and all the necessary pipes and networks for transporting drinking water, As well as agricultural development projects and the needs of the well pipes with different diameters and all networks of spray irrigation and drip.
        The company always seeks to increase its annual production in order to meet the needs of the local market and export and create real job opportunities to encourage Egyptian labor and reduce unemployment by increasing production capacity. The company started to operate with a limited number of machines and production lines. The link factory has about 6 machines. The production lines and the current machines of the pipes and fittings factory reached 40 and 51 respectively, in addition to the latest laboratory equipment and quality that the company has to carry out the necessary tests for all the products that the company Produced so that the company can meet its obligations to society in the belief the national role and development, which is located on it.
       The company is currently pumping new investments through the establishment of a new factory on an area of ​​90 thousand square meters, which is the same area of ​​the current plant, and the company always access to the latest technology related to the industry and use the latest technology and manufacturing currently applied in Europe to achieve the difficult equation ( A high quality product with minimal cost and environmental protection).
  `
},
{
      items:[{ name: "plumbing 1",price : 10 ,amount:0,image:"assets/img/plumbing1.jpg"},{name:"plumbing 2",price: 20,amount:0,image:"assets/img/plumbing2.jpg"},{name:"plumbing 3",price :50,amount:0,image:"assets/img/plumbing3.jpg"}],
      name: "EGCI(BR)",
      group: "plumbing",
      id : "4",
      image : "assets/img/br.jpg",
      desc : ""
},
  {
      items:[{name: "Cabel 1",price:15 ,amount:0,image : "assets/img/cables.jpg" },{name :"Cabel 2" , price : 30,amount:0, image : "assets/img/cables.jpg"},{name : "Cabel 3", price : 40,amount:0,image : "assets/img/cables.jpg"}],
      name : "El-Sewedy",
      group : "Cabels",
      id : "5",
      image : "assets/img/El-Sewedy.jpg",
      desc : ""
    },
    {
      items:[{name: "isolation 1",price:15 ,amount:0, image : "assets/img/isolation.jpg"},{name :"isolation 2" , price : 30,amount:0, image : "assets/img/isolation.jpg"},{name : "isolation 3", price : 40,amount:0, image : "assets/img/isolation.jpg"}],
      name : "Isolation-company",
      group : "isolation",
      id : "6",
      image : "assets/img/isolation.jpg",
      desc : ""
    },
    {
      items:[{name: "constructionChemicals 1",price:15 ,amount:0 , image : "assets/img/constructionChemicals.jpg"},{name :"constructionChemicals 2" , price : 30,amount:0,image : "assets/img/constructionChemicals.jpg"},{name : "constructionChemicals 3", price : 40,amount:0,image : "assets/img/constructionChemicals.jpg"}],
      name : "CMB",
      group : "constructionChemicals",
      id : "7",
      image : "assets/img/cmb.jpg",
      desc : ""
    },
    {
      items:[{name: "GypsumBoard 1",price:15 ,amount:0,image : "assets/img/GypsumBoard.jpg" },{name :"GypsumBoard 2" , price : 30,amount:0,image : "assets/img/GypsumBoard.jpg"},{name : "GypsumBoard 3", price : 40,amount:0,image : "assets/img/GypsumBoard.jpg"}],
      name : "Knauf",
      group : "GypsumBoard",
      id : "8",
      image : "assets/img/knauf.jpg",
      desc : ""
    },
    {
      items:[{name: "AirConditioning 1",price:15 ,amount:0,image : "assets/img/AirConditioning.jpg" },{name :"AirConditioning 2" , price : 30,amount:0,image : "assets/img/AirConditioning.jpg" },{name : "AirConditioning 3", price : 40,amount:0,image : "assets/img/AirConditioning.jpg" }],
      name : "Carrier",
      group : "AirConditioning",
      id : "9",
      image : "assets/img/carrier.jpg",
      desc : ""
    },
    {
      items:[{name: "AirConditioning 1",price:15 ,amount:0,image : "assets/img/AirConditioning.jpg"  },{name :"AirConditioning 2" , price : 30,amount:0,image : "assets/img/AirConditioning.jpg" },{name : "AirConditioning 3", price : 40,amount:0,image : "assets/img/AirConditioning.jpg" }],
      name : "Al-Araby",
      group : "AirConditioning",
      id : "10",
      image : "assets/img/al-araby.jpg",
      desc : ""
    },
    {
      items:[{name: "electricity 1",price:15 ,amount:0,image : "assets/img/electercity1.jpg", },{name :"electricity 2" , price : 30,amount:0,image : "assets/img/electercity2.jpg",},{name : "electricity 3", price : 40,amount:0,image : "assets/img/electercity3.jpg",}],
      name : "Kaled",
      group : "electricity",
      id : "11",
      image : "assets/img/electercity.jpg",
      desc : ""
    },
    {
      items:[{name: "painting 1",price:15 ,amount:0,image : "assets/img/painting1.jpg"},{name :"painting 2" , price : 30,amount:0,image : "assets/img/painting2.jpg"},{name : "painting 3", price : 40,amount:0,image : "assets/img/painting3.jpg"}],
      name : "Jotun",
      group : "painting",
      id : "12",
      image : "assets/img/jotun.jpg",
      desc : ""
    },
    {
      items:[{name: "painting 1",price:15 ,amount:0 ,image : "assets/img/painting1.jpg"},{name :"painting 2" , price : 30,amount:0 ,image : "assets/img/painting2.jpg"},{name : "painting 3", price : 40,amount:0 ,image : "assets/img/painting3.jpg"}],
      name : "glc",
      group : "painting",
      id : "13",
      image : "assets/img/glc.jpg",
      desc : ""
    },
    {
      items:[{name: "painting 1",price:15 ,amount:0 ,image : "assets/img/painting1.jpg"},{name :"painting 2" , price : 30,amount:0 ,image : "assets/img/painting3.jpg"},{name : "painting 3", price : 40,amount:0 ,image : "assets/img/painting2.jpg"}],
      name : "sipes",
      group : "painting",
      id : "14",
      image : "assets/img/sipes.jpg",
      desc : ""
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
  image: string,
  desc : string,
}
export interface item{
    name:string,
    price : number ,
    amount : number,
    image  : string
}