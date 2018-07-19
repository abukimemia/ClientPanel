import { Injectable } from '@angular/core';
import { Settings } from '../models/Settings';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings: Settings = {
    allowRegistration: true,
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false
  };

  constructor() {
    if (localStorage.getItem('settings') != null) {
      // change to JSON object when fetching from local storage
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
  }

  getSettings(): Settings {
    return this.settings;
  }

  changeSettings(settings: Settings) {
    // change to string object when storing in local storage
    localStorage.setItem('settings', JSON.stringify(settings));
  }

}
