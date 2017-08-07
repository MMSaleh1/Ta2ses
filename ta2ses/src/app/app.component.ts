import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SearchFilterProvider} from '../providers/search-filter/search-filter';
import 'rxjs/add/operator/debounceTime';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ItemPage } from '../pages/item/item';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  viewType:number;


  searchTerm:string;
  rootPage: any = HomePage;
  filteredList : any;
  filterBy : any ="nogroup";
  filters:Array<{group: string , image:string}>=new Array();
  suppliers: Array<{items:Array<{
    name:string, price : number , amount : number
  }>,
  group: string,
  name: string,
  id: string,
  image: string
}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public searchFilter :SearchFilterProvider) {
    this.initializeApp();
     this.viewType=0;
    this.searchTerm="";
    // used for an example of ngFor and navigation
   this.suppliers=this.searchFilter.searchItems();
    this.filter(0);
    for(var i=0;i<this.suppliers.length;i++){
      this.filters[i]={group : this.suppliers[i].group , image : this.suppliers[i].image};
   }
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
      this.filteredList = this.suppliers;
    }else{
      var counter = 0;
      this.filteredList=[];
       for(var i= 0 ; i<this.suppliers.length;i++){
         if(this.suppliers[i].group === group){
           this.filteredList[counter++]=this.suppliers[i];

         }else{

         }

       }
    }
  }


  search(){
     this.suppliers = this.searchFilter.searchItems(this.searchTerm);
     this.filteredList=this.suppliers;
  }
  setView(viewType : number){
    this.searchTerm="";
    this.viewType=viewType;
    this.filter(0);
  }
  
}
