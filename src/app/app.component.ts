import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Plugins, StatusBarStyle, } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if(this.platform.is('ios') || this.platform.is('android')) {
        const { SplashScreen } = Plugins;
        const { StatusBar } = Plugins;      
        StatusBar.setStyle({style: StatusBarStyle.Light});
        SplashScreen.hide();
      }
    });
  }
}
