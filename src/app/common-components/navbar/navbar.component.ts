import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State as HomepageState } from '../../store/homepage/reducers';
import { searchRepository } from 'src/app/store/homepage/actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('searchInput') searchInput!: ElementRef;

  formControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  filteredOptions: string[];

  constructor(private store: Store<HomepageState>) {
    this.filteredOptions = this.options.slice();
  }

  ngOnInit(): void {}

  filter() {
    const filterValue = '';
    this.filteredOptions = this.options.filter((o) =>
      o.toLowerCase().includes(filterValue)
    );
  }

  onSearch() {
    const { value } = this.searchInput.nativeElement;
    this.store.dispatch(searchRepository());
  }
}
