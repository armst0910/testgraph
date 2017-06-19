import {Component, OnInit, Input} from '@angular/core';
import {Mapthailocation} from "../../model/mapthailocation";
import {Marker} from "../../model/marker";
import {MapService} from "../../service/map.service";

@Component({
  selector: 'app-marker-budget',
  templateUrl: './marker-budget.component.html',
  styleUrls: ['./marker-budget.component.css']
})
export class MarkerBudgetComponent implements OnInit {

  // map = {lat: 13.758889198303223, lng: 100.5344467163086, zoom: 8};
  // locationList:Mapthailocation[] = [];
  // markList:Marker[] = [];
  // title:any[] = [];
  // check:boolean = false;
  // // items:TagInput[] = [];
  // @Input('word') word: string;
  constructor(private mapService: MapService) {

  }

  ngOnInit() {
    // this.getMarkerCluster();
  }

  getMarkerCluster(){
    // this.markList = [];
    // this.title = [];
    // this.mapService.getDatabudget(this.word).subscribe((res) => {
    //   this.locationList = res;
    //   this.locationList.map((local:Mapthailocation) => {
    //     this.markList = [...this.markList , { lat:local.latitude,lng:local.longtitude}];
    //     this.title = [...this.title , { text:local.text }];
    //   });
    //   this.check = true;
    // });
  }


}
