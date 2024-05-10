import {
  Component,
  EventEmitter,
  Input,
  Output,
  input,
  output,
} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'characters-modal',
  templateUrl: './characters-modal.component.html',
})
export class CharactersModalComponent {
  @Input()
  public selectedCharacter?: Character;
  @Input()
  public isModalOpen!: boolean;

  @Output()
  public onCloseModal: EventEmitter<boolean> = new EventEmitter();

  emitCloseModal() {
    this.onCloseModal.emit(false);
  }
}
