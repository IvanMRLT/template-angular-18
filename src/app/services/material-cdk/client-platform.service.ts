import { Injectable } from '@angular/core';
import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior,
} from '@angular/cdk/platform';

@Injectable({
  providedIn: 'root'
})
export class ClientPlatformService {
  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();

  constructor(private _platform: Platform) {}

  get platform(): Platform {
    return this._platform;
  }
}
