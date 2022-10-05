import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  pokemonsList = []

  constructor (private http: HttpClient, public generalService: GeneralService) {}

  ngOnInit() {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon')
    .subscribe(res => {
      this.pokemonsList = res.results
      console.log(this.pokemonsList)
    })
  }
}
