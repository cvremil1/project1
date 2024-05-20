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


@NgModule({
  declarations: [
    AppComponent,
    ContractViewComponent,
    ContractViewChartComponent,
    MainViewComponent,
    ExpandViewchartComponent,
    DummyYardComponent,
    CompuseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
