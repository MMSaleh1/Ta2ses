import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule  } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ItemPage} from '../pages/item/item';
import { LoginPage} from '../pages/login/login';
import {RegistrationPage} from '../pages/registration/registration';
import {FpPage}from '../pages/fp/fp';
import {ProfilePage} from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SearchFilterProvider } from '../providers/search-filter/search-filter';
import { HeaderComponent } from '../components/header/header';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ItemPage,
    RegistrationPage,
    LoginPage,
    FpPage,
    HeaderComponent,
    ProfilePage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ItemPage,
    RegistrationPage,
    LoginPage,
    FpPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SearchFilterProvider
  ]
})
export class AppModule {}
