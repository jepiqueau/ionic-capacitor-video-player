import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { CapacitorVideoPlayer } from 'capacitor-video-player'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public platform: Platform) {

  }
  async testPlugin(){ 
    let videoPlayer: any;
    if(this.platform.is('ios') || this.platform.is('android')) {
      const { CapacitorVideoPlayer } = Plugins;
      videoPlayer = CapacitorVideoPlayer;
      console.log('in ios or android')
    } else {
      videoPlayer = CapacitorVideoPlayer;
    }
    const res:any  = await videoPlayer.play({url:"https://clips.vorwaerts-gmbh.de/VfE_html5.mp4"});
    console.log('result of echo ', res)
  }
}
