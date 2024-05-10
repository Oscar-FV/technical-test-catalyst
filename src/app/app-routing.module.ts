import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListingComponent } from './characters/pages/character-listing/characters-listing.component';
import { CharacterDataSheetComponent } from './characters/pages/characters-data-sheet/characters-data-sheet.component';
import { dataSheetResolver } from './characters/resolver/data-sheet-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: CharacterListingComponent,
  },
  {
    path: 'character/:id',
    component: CharacterDataSheetComponent,
    resolve: { dataSheet: dataSheetResolver },
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
