import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataSheet } from '../../interfaces/dataSheet.interface';

@Component({
  selector: 'characters-data-sheet-grid',
  templateUrl: './data-sheet-grid.component.html',
})
export class DataSheetGridComponent implements OnInit {
  public dataSheet!: dataSheet;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ dataSheet }) => {
      this.dataSheet = dataSheet;
    });
  }
}
