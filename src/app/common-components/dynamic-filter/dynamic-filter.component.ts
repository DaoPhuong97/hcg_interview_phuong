import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State as HomepageState } from '../../store/homepage/reducers';
import { selectState } from 'src/app/store/homepage/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dynamic-filter',
  templateUrl: './dynamic-filter.component.html',
  styleUrls: ['./dynamic-filter.component.scss'],
})
export class DynamicFilterComponent implements OnInit {
  state: Observable<any> = this.store.select(selectState);

  constructor(private store: Store<HomepageState>) {}

  ngOnInit(): void {}
}
