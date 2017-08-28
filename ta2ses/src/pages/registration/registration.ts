import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

import {HomePage} from '../home/home';
/**
 * Generated class for the RegisterationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  public regesterForm: FormGroup;
  public regesterBefore = false;
  public user:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder:FormBuilder ) {
  this.buildregesterForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterationPage');
  }
   buildregesterForm(): void {
		this.regesterForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/)]],
      name : ['', [Validators.required, Validators.minLength(4),Validators.maxLength(12) ]],
      password: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(12) ]],
      address: ['', [Validators.required,Validators.minLength(6) ]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required,Validators.minLength(11),Validators.maxLength(12)]]
		});
  }
  onRegester(){
    this.regesterBefore=true;
      this.user[0]=this.regesterForm.value.name;
      this.user[1]=this.regesterForm.value.password;
      this.user[2]=this.regesterForm.value.email;
      this.user[3]=this.regesterForm.value.phone;
      this.user[4]=this.regesterForm.value.address;
      this.user[5]=this.regesterForm.value.gender;
      console.log(this.user);
      if(this.regesterForm.valid){
        this.navCtrl.setRoot(HomePage,{userdata:this.user});
      }
     
     
    }


}
