import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GraphBarComponent} from "../component/graph-bar/graph-bar.component";
import {MarkerBudgetComponent} from "../component/marker-budget/marker-budget.component";


const routes: Routes = [
  // { path: '', redirectTo: '/heat', pathMatch: 'full'},
  { path: 'bar',  component: GraphBarComponent },
  // { path: 'Social_Marker', component: MarkerBudgetComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RouteModule { }

