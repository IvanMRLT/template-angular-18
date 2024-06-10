import { Component, OnDestroy } from '@angular/core';
import { ClientLayoutService } from './services/material-cdk/client-layout.service';
import { ClientPlatformService } from './services/material-cdk/client-platform.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  title = 'template18';
  constructor(
    public _clientLayout: ClientLayoutService,
    public _clientPlatform: ClientPlatformService,
  ){}
  ngOnDestroy(): void {
    this._clientLayout.destroy();
  }
}
