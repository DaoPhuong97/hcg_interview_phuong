import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface SearchRepositoryProps {
  searchTerm: string;
  page: number;
}

interface SearchByFilterProps {
  owner: string;
  language: string;
}

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  GITHUB_API = 'https://api.github.com/';
  GITHUB_API_USER = 'https://api.github.com/users/';
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

  searchRepositoryByFilter(props: SearchByFilterProps) {
    const { owner, language } = props;
    return this.http.get(
      `${this.GITHUB_API_USER}${owner}/repos?language=${language}`
    );
  }

  getGithubAPILanguages(): Observable<any> {
    return this.http.get(`${this.GITHUB_API}languages`);
  }
}
