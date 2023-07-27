import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { PokemonApiService } from './pokemon-api.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, CommonModule, HttpClientModule, FormsModule],
  providers: [PokemonApiService],
  declarations: [
    AppComponent,
    PokemonSearchComponent,
    PokemonListComponent,
    FavoriteListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
