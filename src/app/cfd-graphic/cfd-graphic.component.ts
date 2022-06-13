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
    const testeData = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
    const devData = [5, 10, 20, 60, 70, 80, 90, 10, 32, 38];
    const prontoData = [0, 5, 10, 10, 10, 11, 12, 14, 20, 22];
    const backlodData = [50, 50, 80, 90, 100, 100, 100, 100, 100, 100];

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
          data: testeData,

        }, {
          label: "Desenvolvimneto",
          fill: true,
          backgroundColor: colors.yellow.fill,
          pointBackgroundColor: colors.yellow.stroke,
          borderColor: colors.yellow.stroke,
          borderCapStyle: 'butt',
          data: devData,
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
          data: backlodData,
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
