import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContractViewComponent } from './contract-view/contract-view.component';
import { ContractViewChartComponent } from './components/contract-view-chart/contract-view-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainViewComponent } from './main-view/main-view.component';
import { ExpandViewchartComponent } from './components/expand-viewchart/expand-viewchart.component';
import { DummyYardComponent } from './components/dummy-yard/dummy-yard.component';
import { CompuseComponent } from './components/compuse/compuse.component';
import { MenuComponent } from './components/menu/menu.component';
import { MapComponent } from './components/map/map.component';
import { FooterChartComponent } from './components/footer-chart/footer-chart.component';
import { FooterInfoMessageComponent } from './components/footer-info-message/footer-info-message.component';



@NgModule({
  declarations: [
    AppComponent,
    ContractViewComponent,
    ContractViewChartComponent,
    MainViewComponent,
    ExpandViewchartComponent,
    DummyYardComponent,
    CompuseComponent,
    MenuComponent,
    MapComponent,
    FooterChartComponent,
    FooterInfoMessageComponent,
    FooterInfoMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// 
// @NgModule({
//   // ...
//   imports: [
//     // ...
//     AgmCoreModule.forRoot({
//       apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
//     }),
//     // ...
//   ],
//   // ...
// })
// export class AppModule { }