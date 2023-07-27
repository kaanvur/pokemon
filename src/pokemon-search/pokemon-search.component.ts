import { Component, Output, EventEmitter } from '@angular/core';
import { PokemonApiService } from '../pokemon-api.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css'],
})
export class PokemonSearchComponent {
  searchTerm: string = '';
  private searchTimeout: any;
  pokemonList: any = [];

  constructor(private pokemonApiService: PokemonApiService) {}
  @Output() searchResultsEvent = new EventEmitter<any>();

  onSearch(): void {
    clearTimeout(this.searchTimeout);

    this.searchTimeout = setTimeout(() => {
      this.performSearch();
    }, 400);
  }
  private performSearch(): void {
    this.pokemonApiService.searchPokemonByName(this.searchTerm).subscribe(
      (data) => {
        this.searchResultsEvent.emit(data);
      },
      (error) => {
        console.log('Hata:', error);
      }
    );
  }
}
