import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  formControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  filteredOptions: string[];

  constructor() {
    this.filteredOptions = this.options.slice();
  }

  ngOnInit(): void {}

  filter() {
    const filterValue = '';
    this.filteredOptions = this.options.filter((o) =>
      o.toLowerCase().includes(filterValue)
    );
  }
}
