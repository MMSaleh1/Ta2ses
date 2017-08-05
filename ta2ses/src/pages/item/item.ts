import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  public name : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get("data");
    this.name = navParams.get("supplier");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }
  changeNumber(func : String,index : any){
    if(func == 'add'){
      this.data[index].amount++;
    }else{
      if(this.data[index].amount!=0){

          this.data[index].amount--;
      }
      
    }
    console.log(this.data[index].amount);
  }
   order(){
    let totalPrice =0;
    for(let i =0; i< this.data.length;i++){
      totalPrice += (this.data[i].amount*this.data[i].price);
    }
    console.log(totalPrice);
  }

}
