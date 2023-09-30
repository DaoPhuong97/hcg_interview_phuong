import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSearchResult } from 'src/app/store/homepage/selectors';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  items: Observable<any> = this.store.select(selectSearchResult);
  constructor(private store: Store) {}

  ngOnInit(): void {}

  onScroll() {}
}
