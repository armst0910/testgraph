import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MapService } from "../../service/map.service";
import { Map } from "../../model/map";
import { Budgetlist } from "../../model/budgetlist";
import * as _ from 'lodash';

@Component({
  selector: 'app-graph-bar',
  templateUrl: 'graph-bar.component.html',
  styleUrls: ['graph-bar.component.css']
})
export class GraphBarComponent implements OnInit {
  datab: Budgetlist[] = [];
  data: any;
  title: any[] = [];
  labels: any[] = [];
  dataGraph: any[] = [];
  options: any;
  check: boolean = false;
  colors: any[] = [
    '#ed0d1f', '#3db221', '#9d42b9', '#ebd537', '#3d46ef',
    '#D75BE3', '#70F8D5', '#00E45F', '#ECA0BA', '#98C3DE',
    '#9D0F3C', '#AE74E8', '#8FC0E8', '#9B0700', '#A4ED82',
    '#7FEFB5', '#02627A', '#FFD905'];
  backgroundColor: any[] = [];
  clickObj: string;
  xpp: any = {};
  @Input('master') masterName: string;
  @Output() clickparam: EventEmitter<any> = new EventEmitter();
  @Output() userUpdated = new EventEmitter();

  constructor(private mapService: MapService) {
    // let user = "ok"
    // this.userUpdated.emit(user);

  }

  ngOnInit() {
    setTimeout(() => this.showBarGraph(), 500);
  }

  showBarGraph() {
    // old code
    // let i = 0;
    // this.mapService.getdatabudget().subscribe(
    // (res: Budgetlist[]) => {
    //   res.map((mapList) => {
    //     this.title = [...this.title, mapList.level];
    //     this.labels = [...this.labels, mapList.type];
    //     this.dataGraph = [...this.dataGraph, mapList.value];
    //     this.backgroundColor = [...this.backgroundColor, this.colors[i]];
    //     i++;
    //   });
    //   console.log('2')
    //   this.dataGraph.push(0);
    //   this.data = {
    //     labels: this.labels,
    //     datasets: [{
    //       label: 'ภาค',
    //       backgroundColor: this.backgroundColor,
    //       borderColor: '#000000',
    //       data: this.dataGraph
    //     }],
    //   }
    //   if (this.dataGraph.length > 0) {
    //     this.check = true;
    //   }
    // });

    this.mapService.getMockupDataBudget()
      .delay(500)
      .do((response: any[]) => response.length > 0 ? this.check = true : false)
      .subscribe((response: any[]) => {
        const labels = _.uniqBy(response, 'type').map((item) => item['type']);
        const datasetLabels = _.uniqBy(response, 'level').map((item) => item['level']);
        const datasets = datasetLabels.reduce((acc, val, index) => {
          acc = [...acc, {
            label: val,
            data: response.filter((item) => item['level'] === val).map((item) => item['value']),
            backgroundColor: this.colors[index],
            borderColor: this.colors[index],
          }];
          return acc;
        }, []);
        this.data = {
          labels,
          datasets
        };
        console.log(this.data);
      });

    this.options = {
      legend: {
        labels: {
          boxWidth: 0,
          fontSize: 24,

        }
      },
      title: {
        display: true,
        text: ''
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  }

  selectData(evt) {
    // this.clickObj = evt.element._model.datasetLabel;
    // this.clickparam.emit(this.clickObj);
    // this.clickObj =
    // this.clickparam.emit(this.clickObj);
  }
}


