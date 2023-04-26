import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from './counter/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-app';
  public store = inject(Store)
  public counter = this.store.select(({counter}) => counter);

  public increment() {
    this.store.dispatch(increment())
  }

  public decrement() {
    this.store.dispatch(decrement())
  }
}
