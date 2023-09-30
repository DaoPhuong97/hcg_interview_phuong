import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State as HomepageState } from '../../store/homepage/reducers';
import {
  onToggleAdvacnedFilter,
  searchRepository,
} from 'src/app/store/homepage/actions';
import { selectFilter, selectState } from 'src/app/store/homepage/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('searchInput') searchInput!: ElementRef;

  searchTerm = '';
  formControl = new FormControl('');
  options: string[] = [];
  filteredOptions: string[] = [];

  state: Observable<any> = this.store.select(selectState);
  filters: Observable<any> = this.store.select(selectFilter);

  histories: string[] = [];

  constructor(private store: Store<HomepageState>) {}

  ngOnInit(): void {
    const initSearchTerm = 'angular';
    this.histories.concat(initSearchTerm);
    this.searchTerm = initSearchTerm;
    this.store.dispatch(
      searchRepository({
        value: initSearchTerm,
        filter: { owner: '', language: '' },
      })
    );
  }

  onFilter() {}

  onSearch() {
    this.histories = this.histories.concat(this.searchTerm);
    this.filteredOptions = this.histories;
    this.filters.subscribe((filter) => {
      this.store.dispatch(searchRepository({ value: this.searchTerm, filter }));
    });
  }

  handleAdvancedSearch(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.store.dispatch(onToggleAdvacnedFilter());
  }
}
