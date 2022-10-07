import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { GeneralService } from 'src/app/services/general.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  pokemonsList = []

  constructor (private http: HttpClient, public generalService: GeneralService) {}

  ngOnInit() {
    this.http.get<any>(environment.urlPokemonList)
    .subscribe(res => {
      this.pokemonsList = res.results
      console.log(this.pokemonsList)
    })
  }
}
