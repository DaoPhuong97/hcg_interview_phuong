import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface SearchRepositoryProps {
  searchTerm: string;
  filter: SearchByFilterProps;
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
    const { searchTerm = '', page = 1, filter } = props;
    const { owner = '', language = '' } = filter;
    const languageQuery = language.length > 0 ? `language:${language}` : '';
    const ownerQuery = owner.length > 0 ? `owner:${owner}` : '';
    const query = `${languageQuery} ${ownerQuery} ${searchTerm}`;
    return this.http.get(
      `${this.GITHUB_API}search/repositories?q=${query}&per_page=20&page=${page}`
    );
  }

  searchRepositoryByFilter(filter: any) {
    const { owner, language = 'JavaScript' } = filter;
    return this.http.get(
      `${this.GITHUB_API_USER}${owner}/repos?language=${language}`
    );
  }

  getGithubAPILanguages(): Observable<any> {
    return this.http.get(`${this.GITHUB_API}languages`);
  }
}
