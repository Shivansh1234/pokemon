import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemonList = [];

  constructor(private homeService: HomeService) { }

  // specify the number of pokemon cards you want to see
  async createPokemonList(): Promise<void> {
    for (let i = 1; i <= 10; i++) {
      let pokeObj = {};
      await this.homeService.getPokemonStats(i).toPromise().then(stats => {
        pokeObj = {
          id: stats.id,
          name: stats.name,
          weight: stats.weight,
          height: stats.height,
          icon: stats.sprites.other['official-artwork'].front_default,
          hp: stats.stats[0].base_stat,
          attack: stats.stats[1].base_stat,
          defense: stats.stats[2].base_stat,
          speed: stats.stats[5].base_stat,
          types: stats.types.map(x => x.type.name)
        }
        this.pokemonList.push(pokeObj);
      });
    }
    console.log(this.pokemonList.length);
  }

  ngOnInit(): void {
    this.createPokemonList();
  }

}
