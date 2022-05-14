import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  playerA = []
  playerB = []
  pokemonList = [];
  constructor(private snackbar: MatSnackBar, private homeService: HomeService) { }

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

    this.playerA = this.pokemonList.slice(0, this.pokemonList.length / 2);
    this.playerB = this.pokemonList.slice(this.pokemonList.length / 2, this.pokemonList.length);
    console.log(this.playerA, this.playerB)
  }

  ngOnInit(): void {
    this.createPokemonList();
    console.log(this.pokemonList);
    // console.log(this.arrayShuffle(this.pokemonList));
    // this.snackbar.open('Please do not go back or refresh the page, you will lose the progress.', 'OK');
  }

}
