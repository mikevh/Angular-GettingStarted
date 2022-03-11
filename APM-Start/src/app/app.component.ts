import { Component } from '@angular/core';

@Component({
  selector: 'mv-root',
  // templateUrl: ./app.component.html
  template: `<div>
    <h1>{{ pageTitle }}</h1>
    <mv-products></mv-products>
  </div>`,
})
export class AppComponent {
  pageTitle: string = 'MV mgmt';
}
