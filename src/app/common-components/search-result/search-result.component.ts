import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadMoreSearchResult } from 'src/app/store/homepage/actions';
import {
  selectSearchResult,
  selectState,
} from 'src/app/store/homepage/selectors';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  items: Observable<any> = this.store.select(selectSearchResult);
  state: Observable<any> = this.store.select(selectState);

  totalCount = 0;
  internalSearchTerm = '';
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.state.subscribe((state) => {
      this.totalCount = state.totalCount;
      this.internalSearchTerm = state.searchTerm;
    });
  }

  onScroll() {
    this.state.subscribe((state) => {
      const { page, searchTerm } = state;
      this.store.dispatch(loadMoreSearchResult({ page: page + 1, searchTerm }));
    });
  }
}
