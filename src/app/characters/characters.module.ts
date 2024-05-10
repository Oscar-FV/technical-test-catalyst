import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListingComponent } from './pages/character-listing/characters-listing.component';
import { CharactersListItemComponent } from './components/charactecters-list-item/characters-list-item.component';
import { CharactersSearchComponent } from './components/charactecters-search/characters-search.component';
import { CharactersModalComponent } from './components/characters-modal/characters-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterDataSheetComponent } from './pages/characters-data-sheet/characters-data-sheet.component';
import { DataSheetGridComponent } from './components/data-sheet-grid/data-sheet-grid.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CharacterListingComponent,
    CharactersListItemComponent,
    CharactersSearchComponent,
    CharactersModalComponent,
    CharacterDataSheetComponent,
    DataSheetGridComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [CharacterListingComponent, CharacterDataSheetComponent],
})
export class CharactersModule {}
