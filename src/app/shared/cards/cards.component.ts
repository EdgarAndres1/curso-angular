import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() imagen : string = '';
  @Input() nombre : string = '';
  @Input() conBoton : boolean  = false;
  @Output () newItemEvent = new EventEmitter<string()>
  @Input () 

  constructor ()  {}

    ngOnInit (): void {
  }
  addNewItem(value:string){
    this.newItemEvent.emit(value);
  }

}
