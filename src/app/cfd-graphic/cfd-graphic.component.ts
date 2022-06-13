import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-cfd-graphic',
  templateUrl: './cfd-graphic.component.html',
  styleUrls: ['./cfd-graphic.component.css']
})
export class CfdGraphicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Chart.register(...registerables);

    const colors = {
      green: {
        fill: '#e0eadf',
        stroke: '#5eb84d',
      },
      lightBlue: {
        stroke: '#6fccdd',
      },
      darkBlue: {
        fill: '#92bed2',
        stroke: '#3282bf',
      },
      purple: {
        fill: '#8fa8c8',
        stroke: '#75539e',
      },
    };

    const loggedIn = [26, 36, 42, 38, 40, 30, 12];
    const available = [34, 44, 33, 24, 25, 28, 25];
    const availableForExisting = [16, 13, 25, 33, 40, 33, 45];
    const unavailable = [5, 9, 10, 9, 18, 19, 20];
    const xData = [13, 14, 15, 16, 17, 18, 19];

    var cfd = new Chart("cfd", {
      type: 'line',
      data: {
        labels: xData,
        datasets: [{
          label: "Unavailable",
          fill: true,
          backgroundColor: colors.purple.fill,
          pointBackgroundColor: colors.purple.stroke,
          borderColor: colors.purple.stroke,
          //pointHighlightStroke: colors.purple.stroke,
          borderCapStyle: 'butt',
          data: unavailable,

        }, {
          label: "Available for Existing",
          fill: true,
          backgroundColor: colors.darkBlue.fill,
          pointBackgroundColor: colors.darkBlue.stroke,
          borderColor: colors.darkBlue.stroke,
          //pointHighlightStroke: colors.darkBlue.stroke,
          borderCapStyle: 'butt',
          data: availableForExisting,
        }, {
          label: "Available",
          fill: true,
          backgroundColor: colors.green.fill,
          pointBackgroundColor: colors.lightBlue.stroke,
          borderColor: colors.lightBlue.stroke,
          //pointHighlightStroke: colors.lightBlue.stroke,
          borderCapStyle: 'butt',
          data: available,
        }, {
          label: "Logged In",
          fill: true,
          backgroundColor: colors.green.fill,
          pointBackgroundColor: colors.green.stroke,
          borderColor: colors.green.stroke,
          //pointHighlightStroke: colors.green.stroke,
          data: loggedIn,
        }]
      },      
      options: {
        responsive: true,
        scales: {
          yAxes: {
            stacked: true
          }
        },
      },
    });
  }

}
