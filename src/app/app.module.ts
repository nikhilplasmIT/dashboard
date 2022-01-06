import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {DashboardComponent} from './sidenav/dashboard/dashboard.component';
import { IonicModule } from '@ionic/angular'


@NgModule({
  declarations: [		
    AppComponent,
      DashboardComponent,
      SidenavComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
