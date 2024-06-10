import { Component, OnDestroy } from '@angular/core';
import { ClientLayoutService } from './services/material-cdk/client-layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  title = 'template18';
  constructor(
    private _clientLayout: ClientLayoutService
  ){}
  ngOnDestroy(): void {
    this._clientLayout.destroy();
  }
}
