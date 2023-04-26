import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { divide, multiply } from '../counter.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent {
  public store = inject(Store)
  public counter = this.store.select(({counter}) => counter);



  multiply() {
    this.store.dispatch(multiply({value: 7}))
  }
  divide() {
    this.store.dispatch(divide({value: 7}))
  }
}
