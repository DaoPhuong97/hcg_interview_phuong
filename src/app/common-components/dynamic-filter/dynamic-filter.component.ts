import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State as HomepageState } from '../../store/homepage/reducers';
import {
  selectFilter,
  selectIsUseFilter,
} from 'src/app/store/homepage/selectors';
import { Observable, filter } from 'rxjs';
import { updateAdvancedFilter } from 'src/app/store/homepage/actions';

@Component({
  selector: 'app-dynamic-filter',
  templateUrl: './dynamic-filter.component.html',
  styleUrls: ['./dynamic-filter.component.scss'],
})
export class DynamicFilterComponent implements OnInit {
  filters: Observable<any> = this.store.select(selectFilter);
  isUseFilter: Observable<any> = this.store.select(selectIsUseFilter);

  ownerValue: string = '';
  useLanguageFilter = false;

  constructor(private store: Store<HomepageState>) {}
  ngOnInit(): void {}

  onOwnerInputChange(value: string) {
    this.store.dispatch(updateAdvancedFilter({ key: 'owner', value }));
  }
  toggleLanguageFilter(value: boolean) {
    this.useLanguageFilter = value;
    if (value === false) {
      this.store.dispatch(updateAdvancedFilter({ key: 'language', value: '' }));
    }
  }
}
