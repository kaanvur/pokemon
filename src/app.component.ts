import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  searchResults: any;
  FavoritePokemons: any;

  onSearchResults(results: any): void {
    this.searchResults = results;
  }
}
