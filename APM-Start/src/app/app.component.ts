import { Component } from '@angular/core';

@Component({
  selector: 'mv-root',
  template: `<div>
    <h1>{{ pageTitle }}</h1>
    <div>first component</div>
  </div>`,
})
export class AppComponent {
  pageTitle: string = 'MV mgmt';
}
