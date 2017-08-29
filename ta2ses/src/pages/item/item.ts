import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {ProfilePage} from '../profile/profile';
/**
 * Generated class for the ItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {
  public data :any;
  public items :any;
  public name : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get("data");
    this.items = this.data.items;
    this.name = navParams.get("supplier");
    console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }
  changeNumber(func : String,index : any){
    if(func == 'add'){
      this.items[index].amount++;
    }else{
      if(this.items[index].amount!=0){

          this.items[index].amount--;
      }
      
    }
    console.log(this.items[index].amount);
  }
   order(){
    let totalPrice =0;
    for(let i =0; i< this.items.length;i++){
      totalPrice += (this.items[i].amount*this.items[i].price);
    }
    let tot = "Your total price is : "+totalPrice;
    alert(tot);
  }
  openPage(){
    this.navCtrl.push(ProfilePage,{"supplier" : this.data});
  }

}
