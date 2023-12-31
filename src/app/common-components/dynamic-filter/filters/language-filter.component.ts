import { Component, OnInit } from '@angular/core';
import { map, startWith } from 'rxjs';
import { HomepageService } from 'src/app/homepage.service';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { updateAdvancedFilter } from 'src/app/store/homepage/actions';

@Component({
  selector: 'app-language-filter',
  templateUrl: './language-filter.component.html',
  styleUrls: ['./language-filter.component.scss'],
})
export class LanguageFilterComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions: any;

  constructor(private service: HomepageService, private store: Store<any>) {}

  ngOnInit(): void {
    this.service.getGithubAPILanguages().subscribe((res) => {
      this.options = res.map((item: any) => item.name);
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onChangeLanguageSelect(event: any) {
    const value = event.option.value;
    this.store.dispatch(updateAdvancedFilter({ key: 'language', value }));
  }
}
