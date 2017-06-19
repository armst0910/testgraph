import {Directive, Input, Output, EventEmitter} from '@angular/core';
import {Marker} from "../../../model/marker";
import {GoogleMapsAPIWrapper} from "angular2-google-maps/core";

declare const google;
declare const MarkerClusterer;

@Directive({
  selector: 'appSebmGoogleMapMarkerBudgetCluster'
})
export class SebmGoogleMapMarkerBudgetClusterDirective {

  // @Input() location:Marker[];
  // @Input() title:any[];
  // result:any[] = [];
  // dialogVisible: boolean;
  // draggable: boolean;
  // markerCluster;

  initMarkers(){

    //for (let i=0;i < this.location.length;++i){
    //   this.result = [...this.result, new google.maps.Marker({position: this.location[i], title: this.title[i].text, draggable: this.draggable})];
    //   this.title = null;
    //   this.dialogVisible = false;
    //
    // }
    // return this.result;
  }

 clear(){
  //   this.result = [];
  // this.markerCluster.clearMarkers();
}

   constructor (private gmapsApi: GoogleMapsAPIWrapper) {
  }

  initializeMap(){
    // this.gmapsApi.getNativeMap().then(map => {
    //   if(this.markerCluster){
    //     this.clear();
    //   }
    //   let googleMarkers = this.initMarkers();
    //   this.markerCluster = new MarkerClusterer( map, googleMarkers, {imagePath: 'https://googlemaps.github.io/js-marker-clusterer/images/m'});
    // });
  }


}
