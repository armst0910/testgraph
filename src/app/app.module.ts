import{ BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AgmCoreModule} from "angular2-google-maps/core";
import { MapService } from "./service/map.service";
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core/services/google-maps-api-wrapper';
import { GraphBarComponent } from './component/graph-bar/graph-bar.component';
import { ChartModule } from "primeng/components/chart/chart";
import { DataTableModule } from "primeng/components/datatable/datatable";
import { RouteModule } from "./routing/route.module";
import { ButtonModule} from "primeng/components/button/button";
import { TagInputModule } from "ng2-tag-input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MarkerBudgetComponent } from './component/marker-budget/marker-budget.component';
import { SebmGoogleMapMarkerBudgetClusterDirective } from './component/marker-budget/sebm-google-map-marker-budget-cluster/sebm-google-map-marker-budget-cluster.directive';

@NgModule({
  declarations: [
    AppComponent,
    GraphBarComponent,
    MarkerBudgetComponent,
    SebmGoogleMapMarkerBudgetClusterDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmHhQIiGXpOyrHejfUx5PyzrDPnjerGFo',
      libraries: ['visualization','places']
    }),
    ChartModule,
    DataTableModule,
    RouteModule,
    ButtonModule,
    TagInputModule,
    BrowserAnimationsModule
  ],
  providers: [MapService,GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule {}
