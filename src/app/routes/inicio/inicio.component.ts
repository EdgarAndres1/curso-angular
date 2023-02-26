import { Component } from '@angular/core';
import { movieserie } from 'src/app/shared/interfaces/movieseries.interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

movies_series:movieserie[] = [
  {
    id : 1,
  name: "Money Heist",
  description : "Accion",
  image : "/assets/5-money-heist.svg",
  rating :0,
  category : "Peliculas"
},
{
  id : 2,
name: "Friends",
description : "Humor",
image : "/assets/6-friends.svg",
rating :0,
category : "Series"
},
{
  id : 3,
name: "The Big Bang Theory",
description : "Humor",
image : "/assets/7-the-big-bang-theory.svg",
rating :0,
category : "Series"
},
{
  id : 4,
name: "Two and a Half Men",
description : "Humor",
image : "/assets/8-two-and-a-half-men.svg",
rating :0,
category : "Series"
},
{
  id : 5,
name: "Black Widow",
description : "Accion",
image : "/assets/1-black-widow.svg",
rating :0,
category : "Peliculas"
},
{
  id : 6,
name: "Shang-Chi",
description : "Accion",
image : "/assets/2-shang-chi.svg",
rating :0,
category : "Peliculas"
},
{
  id : 7,
name: "Loki",
description : "Accion ",
image : "/assets/3-loki.svg",
rating :0,
category : "Peliculas"
},
{
  id : 8,
name: "How i met your mother",
description : "Humor ",
image : "/assets/4-how-i-met-your-mother.svg",
rating :0,
category : "Peliculas"
}

]

 selected: string = 'Todos';

parabuscar : string = '';

  Change(value: string){
    console.log("Viejo valor del selected", this.selected);
    this.selected = value;
    console.log("Nuevo valor del selected", this.selected);
  }
  
buscar(value:string) {
  console.log(value)
}

}   


