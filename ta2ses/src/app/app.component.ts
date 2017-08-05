import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ItemPage } from '../pages/item/item';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  filteredList : any;
  filterBy : any ="nogroup";
  pages: Array<{title: string,group : string,id: string, items: any}>;

  suppliers: Array<{items:Array<{
    name:string, price : number , amount : number
  }>,
  group: string,
  name: string,
  id: string,
}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
   
    this.suppliers=[{
      items:[{ name: "steel 1",price : 10 ,amount:0},{name:"steel 2",price: 20,amount:0},{name:"steel 3",price :50,amount:0}],
      name: "steel",
      group: "steel",
      id : "1"
    },
    {
      items:[{name: "furneture 1",price:15 ,amount:0 },{name :"furnetrue 2" , price : 30,amount:0},{name : "furneture 3", price : 40,amount:0}],
      name : "furneture",
      group : "furnetrue",
      id : "2"
    }
  ];
   this.pages = [
      { title: this.suppliers[0].name,group:this.suppliers[0].group,id: this.suppliers[0].id, items:this.suppliers[0].items},
     { title: this.suppliers[1].name,group:this.suppliers[1].group,id: this.suppliers[1].id, items:this.suppliers[1].items},
    ];
    this.filter(0);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    
    this.nav.setRoot(ItemPage,{data : page.items ,supplier : page.title});
  }

  filter(filter : any,group : string = "nogroup"){
    
    if(filter ==0 || group =="nogroup"){
      this.filteredList = this.pages;
    }else{
      var counter = 0;
      this.filteredList=[];
      console.log(filter);
       for(var i= 0 ; i<this.pages.length;i++){
         if(this.pages[i].group === group){
           console.log(this.pages[i].group , group);
           this.filteredList[counter++]=this.pages[i];

         }else{

         }

       }
        console.log(this.filteredList);
    }
  }
  setFilter(filter :string){
    this.filterBy = filter;

  }
}
