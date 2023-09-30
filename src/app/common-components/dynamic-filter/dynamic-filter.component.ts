import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State as HomepageState } from '../../store/homepage/reducers';
import { selectFilter, selectState } from 'src/app/store/homepage/selectors';
import { Observable, filter } from 'rxjs';
import { updateAdvancedFilter } from 'src/app/store/homepage/actions';

@Component({
  selector: 'app-dynamic-filter',
  templateUrl: './dynamic-filter.component.html',
  styleUrls: ['./dynamic-filter.component.scss'],
})
export class DynamicFilterComponent implements OnInit {
  filters: Observable<any> = this.store.select(selectFilter);
  ownerValue: string = '';

  constructor(private store: Store<HomepageState>) {}
  ngOnInit(): void {}

  onOwnerInputChange(value: string) {
    this.store.dispatch(updateAdvancedFilter({ key: 'owner', value }));
  }
}
