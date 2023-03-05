import { Component , OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';
import { movieserie } from 'src/app/shared/interfaces/movieseries.interfaces';
import { Trending } from 'src/app/shared/interfaces/Trending.interface';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  providers : [MoviesService]
})

export class InicioComponent {

movies_series:any = {};

 selected: string = 'Todos';

parabuscar : string = '';

constructor(
  private _moviesService : MoviesService
){
  
}

ngOnInit(): void {
  this.getTrendingAll();
}
getTrendingAll() {
  this._moviesService.getTrending().subscribe({
    next:(data) => {
      this.movies_series = data;
      for (const element of this.movies_series.results){
        element.poster_path = 'https://themoviedb.org/t/p/w220_and_h330_face/' + element.poster_path;
      }
    },
    error:(error)=> {
      console.log(error);
    } 
  })
}
  Change(value: string){
    this.selected = value;
    if (value == 'tv') {
      // this.getTv();
    } else if (value == 'movie') {
      // this.getMovies();
    } else {
      // this.getTrendingAll();
    } 
  }
  
buscar(value:string) {
  console.log(value)
}

}   


