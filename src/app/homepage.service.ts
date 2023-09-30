import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  GITHUB_API = 'https://api.github.com/';
  constructor(private http: HttpClient) {}

  loadHomepageData(): Observable<any> {
    return this.http.get(this.GITHUB_API);
  }

  searchRepository(value: string): Observable<any> {
    return this.http.get(
      `${this.GITHUB_API}search/repositories?q=${value}&per_page=10`
    );
  }
}
