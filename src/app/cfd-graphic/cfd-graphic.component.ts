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
        fill: '#a5d2a5',
        stroke: '#329932',
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
      yellow: {
        fill: '#fff999',
        stroke: '#fff200'
      },
      red: {
        fill: '#ff7a7a',
        stroke: '#ff3232'
      }
    };

    const labels = ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4", "Sprint 5", "Sprint 6", "Sprint 7", "Sprint 8", "Sprint 9", "Sprint 10"];
    const backlogData = [20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
    const desenvolvimentoData = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const testData = [5, 15, 25, 35, 45, 55, 65, 75, 85, 95];
    const prontoData = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    const cfd = new Chart("cfd", {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: "Teste",
          fill: true,
          backgroundColor: colors.darkBlue.fill,
          pointBackgroundColor: colors.darkBlue.stroke,
          borderColor: colors.darkBlue.stroke,
          borderCapStyle: 'butt',
          data: testData,

        }, {
          label: "Desenvolvimneto",
          fill: true,
          backgroundColor: colors.yellow.fill,
          pointBackgroundColor: colors.yellow.stroke,
          borderColor: colors.yellow.stroke,
          borderCapStyle: 'butt',
          data: desenvolvimentoData,
        },
        {
          label: "Pronto",
          fill: true,
          backgroundColor: colors.green.fill,
          pointBackgroundColor: colors.green.stroke,
          borderColor: colors.green.stroke,
          borderCapStyle: 'butt',
          data: prontoData,
        }, {
          label: "Backlog",
          fill: true,
          backgroundColor: colors.red.fill,
          pointBackgroundColor: colors.red.stroke,
          borderColor: colors.red.stroke,
          data: backlogData,
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
