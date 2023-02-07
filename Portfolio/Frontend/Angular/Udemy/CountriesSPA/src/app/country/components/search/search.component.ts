import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  term: string = '';

  search() {
    this.onEnter.emit(this.term );
  }
}
