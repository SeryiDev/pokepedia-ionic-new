import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.page.html',
  styleUrls: ['./pokemon-info.page.scss'],
})
export class PokemonInfoPage implements OnInit {

  pokemonName: string;
  pokemon: any = {}

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient,  public generalService: GeneralService) { }

  ngOnInit() {
    this.pokemonName = this.activatedRoute.snapshot.paramMap.get('name')
    this.http.get("https://pokeapi.co/api/v2/pokemon/" + this.pokemonName)
    .subscribe(pokemonData => {
      this.pokemon = pokemonData
      console.log(this.pokemon)
    })
  }

  formatString(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1) 
  }
}
