import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent {
  @Input() searchResults: any;

  @Output() addFavoreteEvent = new EventEmitter<any>();
  pokemonData: any[] = [];

  addFavorive(pokemon: any): void {
    const isPokemonExists = this.pokemonData.some((p) => p.id === pokemon.id);
    if (!isPokemonExists) {
      this.pokemonData.push(pokemon);
      this.addFavoreteEvent.emit(this.pokemonData);
    }
  }
}
