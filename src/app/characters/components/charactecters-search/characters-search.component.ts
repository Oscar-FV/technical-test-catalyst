import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'characters-search',
  templateUrl: './characters-search.component.html',
})
export class CharactersSearchComponent {
  public search: FormControl = new FormControl('');

  @Input() public placeholder: string = '';
  @Output() public onValueSubmit: EventEmitter<string> = new EventEmitter();

  emitValue(): void {
    this.onValueSubmit.emit(this.search.value);
  }
}
