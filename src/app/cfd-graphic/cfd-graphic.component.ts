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

    var cfd = new Chart("cfd", {
      type: 'line',
      data: {
        labels: ["Sprint 1", "Sprint 2", "Sprint 3"],
        datasets: [{
          label: "Desenvolvimento",
          data: [12, 19, 3, 5, 2, 3],
          borderColor: 'red',
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          fill: 1
        },
        {
          label: "Testes",
          data: [12, 19, 3, 5, 2, 3],
          borderColor: 'yellow',
          backgroundColor: 'yellow',
          fill: 1
        }
        ]
      },
      options: {
        scales: {
          y: {
            stacked: true
          }
        },
        interaction: {
          intersect: false,
        },
      },
    });
  }

}
