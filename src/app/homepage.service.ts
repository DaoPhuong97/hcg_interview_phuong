import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface SearchRepositoryProps {
  searchTerm: string;
  page: number;
}

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  GITHUB_API = 'https://api.github.com/';
  constructor(private http: HttpClient) {}

  loadHomepageData(): Observable<any> {
    return this.http.get(this.GITHUB_API);
  }

  searchRepository(props: SearchRepositoryProps): Observable<any> {
    const { searchTerm = '', page = 1 } = props;
    return this.http.get(
      `${this.GITHUB_API}search/repositories?q=${searchTerm}&per_page=20&page=${page}`
    );
  }
}
