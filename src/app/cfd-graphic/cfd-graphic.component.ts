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
        fill: '#c2e5cb',
        stroke: '#34a853',
      },
      blue: {
        fill: '#c6dafc',
        stroke: '#4285f4',
      },
      yellow: {
        fill: '#feebb3',
        stroke: '#fbbc04'
      },
      red: {
        fill: '#f9c6c2',
        stroke: '#ea4335'
      }
    };

    const labels = ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4", "Sprint 5", "Sprint 6", "Sprint 7", "Sprint 8", "Sprint 9", "Sprint 10"];


    const testData = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45];
    const desenvolvimentoData = [0, 5, 10, 15, 40, 50, 60, 70, 80, 90];
    const prontoData = [0, 5, 10, 15, 42, 25, 30, 35, 40, 45];
    const backlogData = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]

    const cfd = new Chart("cfd", {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: "Pronto",
            fill: true,
            backgroundColor: colors.green.fill,
            pointBackgroundColor: colors.green.stroke,
            borderColor: colors.green.stroke,
            data: prontoData,
            stack: 'Stack 0'
          },
          {
            label: "Teste",
            fill: true,
            backgroundColor: colors.blue.fill,
            pointBackgroundColor: colors.blue.stroke,
            borderColor: colors.blue.stroke,
            data: testData,
            stack: 'Stack 0'
          },
          {
            label: "Desenvolvimento",
            fill: true,
            backgroundColor: colors.yellow.fill,
            pointBackgroundColor: colors.yellow.stroke,
            borderColor: colors.yellow.stroke,
            data: desenvolvimentoData,
            stack: 'Stack 0'
          },
          {
            label: "Backlog",
            fill: true,
            backgroundColor: colors.red.fill,
            pointBackgroundColor: colors.red.stroke,
            borderColor: colors.red.stroke,
            data: backlogData,
            stack: 'Stack 0'
          }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Sprints',
              font: {
                weight: 'bold'
              }
            },
          },
          y: {
            title: {
              display: true,
              text: 'Histórias de usuário',
              font: {
                weight: 'bold'
              }
            },
            stacked: true // Empilhe os valores no eixo Y
          },
        },
      },
    });

  }
}