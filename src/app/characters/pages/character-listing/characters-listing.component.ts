import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CharactersService } from '../../services/characters.service';
import { ApiResponse } from '../../interfaces/apiResponse.interface';

@Component({
  selector: 'characters-listing',
  templateUrl: './characters-listing.component.html',
})
export class CharacterListingComponent implements OnInit {
  public characters: Character[] = [];
  public selectedCharacter: Character = {} as Character;
  public isModalOpen: boolean = false;
  public randomIDs: number[] = [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.randomIDs = this.generateRandomIDs(1, 826, 9);
    this.searchCharacters(this.randomIDs);
  }

  generateRandomIDs(min: number, max: number, count: number): number[] {
    return Array.from(
      { length: count },
      () => Math.floor(Math.random() * (max - min + 1)) + min,
    );
  }

  searchCharacters(list: number[]): void {
    this.characters = [];
    this.charactersService.searchCharacters(list).subscribe((characters) => {
      this.characters = characters;
    });
  }

  searchCharactersByName(name: string): void {
    if (name === '') return;

    this.characters = [];
    this.charactersService.searchFilterByCharacterName(name).subscribe({
      next: (response: ApiResponse) => {
        this.characters = response.results;
      },
      error: () => {},
    });
  }

  onCharacterClick(character: Character): void {
    this.selectedCharacter = character;
    this.isModalOpen = true;

    console.log(character);
  }

  onCloseModal(estatus: boolean): void {
    this.isModalOpen = estatus;
    this.selectedCharacter = {} as Character;
  }
}
