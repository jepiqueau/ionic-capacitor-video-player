import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import * as CapacitorVPPlugin from 'capacitor-video-player';

const { CapacitorVideoPlayer, Device } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {

  }
  async testPlugin(){ 
    let videoPlayer: any;
    const info = await Device.getInfo();
    if (info.platform === "ios" || info.platform === "android") {
      videoPlayer = CapacitorVideoPlayer;
    } else {
      videoPlayer = CapacitorVPPlugin.CapacitorVideoPlayer;
    }
    const res:any  = await videoPlayer.play({url:"https://clips.vorwaerts-gmbh.de/VfE_html5.mp4"});
  }
}
