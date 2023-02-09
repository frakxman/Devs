import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject()

  term: string = '';

  ngOnInit() {
    this.debouncer
      .pipe( debounceTime(300) )
      .subscribe( value => {
      this.onDebounce.emit( value );
    })
  }

  search() {
    this.onEnter.emit(this.term );
  }

  keyPressed() {
    this.debouncer.next( this.term );
  }
}
