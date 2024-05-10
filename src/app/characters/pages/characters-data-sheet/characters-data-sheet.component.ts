import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../interfaces/character.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'characters-data-sheet',
  templateUrl: './characters-data-sheet.component.html',
})
export class CharacterDataSheetComponent {}
