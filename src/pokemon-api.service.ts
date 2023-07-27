import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  private apiUrl = 'https://pokedex.bgure.workers.dev/?q=';

  constructor(private http: HttpClient) {}

  searchPokemonByName(name: string): Observable<any> {
    const url = `${this.apiUrl}${name}`;
    return this.http.get(url);
  }
}
