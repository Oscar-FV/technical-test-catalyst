import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'characters-list-item',
  templateUrl: './characters-list-item.component.html',
})
export class CharactersListItemComponent {
  @Output()
  public onCharacterClick: EventEmitter<Character> = new EventEmitter();

  @Input()
  public character!: Character;

  public characterStatusClasses: { [key: string]: string } = {
    alive: 'badge-secondary',
    death: 'bg-red-300',
    unknown: 'bg-gray-300',
  };

  emitCharacter(character: Character): void {
    this.onCharacterClick.emit(character);
  }
}
