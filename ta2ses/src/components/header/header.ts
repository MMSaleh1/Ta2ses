import { Component,Input } from '@angular/core';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'custom-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Input()
  pageName: string;

  constructor() {
    console.log('Hello HeaderComponent Component');
    this.pageName = 'header';
  }

}
