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
    let url:string;
    const info = await Device.getInfo();
    if (info.platform === "ios" || info.platform === "android") {
      videoPlayer = CapacitorVideoPlayer;
      if (info.platform === "ios") {
        url = "public/assets/video/video.mp4"
      } else {
        url ="raw/video"
      }
    } else {
      videoPlayer = CapacitorVPPlugin.CapacitorVideoPlayer;
      url = "assets/video/video.mp4"
    }
    const res:any  = await videoPlayer.play({url:url});
  }
}
// "https://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
// "http://www.youtube.com/embed/W7qWa52k-nE" does not work