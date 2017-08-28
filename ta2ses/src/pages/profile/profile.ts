import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public supplier : any ;
  public name :any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(this.navParams.get("supplier") != undefined){
      this.supplier = this.navParams.get("supplier");
      this.name = this.supplier.name;
      
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
