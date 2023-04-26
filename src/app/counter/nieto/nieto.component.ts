import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { reset } from '../counter.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent {
  public store = inject(Store)
  public counter = this.store.select(({counter}) => counter)

  public reset() {
    this.store.dispatch(reset())
  }
}
