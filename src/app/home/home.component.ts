import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  options: HighchartsOptions;

  constructor() {
    // Do stuff
    console.log('init home component');

    this.options = {
      title: { text: 'simple chart' },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2],
      }]
    };

  }

  ngOnInit() {
    console.log('Hello Home');
  }

  clickAction() {
    console.log('click action implmeneted...');
  }

}
