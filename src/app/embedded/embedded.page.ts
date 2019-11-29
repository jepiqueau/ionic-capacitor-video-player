import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import * as CapacitorVPPlugin from 'capacitor-video-player';
import { httpVideos, assetsVideos, getAssetsVideoPathes, getVideoNames } from '../../utils/video-utils';
const { CapacitorVideoPlayer, Device } = Plugins;

const videoFrom:string = "http";
/*  comment line above and uncomment line below
    to use videos from assets
*/
//const videoFrom:string = "assets";

@Component({
  selector: 'app-embedded',
  templateUrl: 'embedded.page.html',
  styleUrls: ['embedded.page.scss'],
})
export class EmbeddedPage {
    videoList:Array<string>;
    itemId:Array<string>;
    private _videoPlayerPlugin: any;
    private _results: Array<any> = [];

    constructor() { 
    }

    async ngAfterViewInit() {
        this.videoList = videoFrom === "http" ? httpVideos : null;

        const info = await Device.getInfo();
        if (info.platform === "ios" || info.platform === "android") {
            this._videoPlayerPlugin = CapacitorVideoPlayer;
            this.videoList = info.platform === "ios" && videoFrom === "assets" 
                ? getAssetsVideoPathes("ios",assetsVideos )
                : this.videoList;
            this.videoList = info.platform === "android" && videoFrom === "assets" 
                ? getAssetsVideoPathes("ios",assetsVideos )
                : this.videoList;
        } else {

            this._videoPlayerPlugin = CapacitorVPPlugin.CapacitorVideoPlayer;
            this.videoList = videoFrom === "assets" 
                ? getAssetsVideoPathes("web",assetsVideos )
                : this.videoList;
        } 
        document.addEventListener('jeepCapVideoPlayerPlay', (e:CustomEvent) => { console.log('Event jeepCapVideoPlayerPlay ', e.detail)}, false);
        document.addEventListener('jeepCapVideoPlayerPause', (e:CustomEvent) => { console.log('Event jeepCapVideoPlayerPause ', e.detail)}, false);
        document.addEventListener('jeepCapVideoPlayerEnded', (e:CustomEvent) => { console.log('Event jeepCapVideoPlayerEnded ', e.detail)}, false);
     
        this.itemId = getVideoNames(this.videoList);
        const listEl:HTMLIonListElement = document.querySelector("#videos-list");
        for( let i:number = 0; i< this.itemId.length; i++) {
            const itemEl:HTMLIonItemElement = document.createElement('ion-item');
            const divEl: HTMLDivElement = document.createElement("div");
            divEl.setAttribute('id',this.itemId[i]);
            itemEl.style.setProperty("--inner-padding-top","10px")
            itemEl.style.setProperty("--inner-padding-bottom","10px")
            itemEl.appendChild(divEl);
            listEl.appendChild(itemEl);
            const res:any  = await this._videoPlayerPlugin.initPlayer(
                {mode:"embedded",url:this.videoList[i],
                playerId:this.itemId[i],width:480,height:270
            });
            this._results = [...this._results,res];
        }
    
        // Tests the API
        const play = await this._videoPlayerPlugin.play({playerId:"bigbuckbunny720psurround"});
        console.log('const play ', play);
        setTimeout(async () => {
            const pause = await this._videoPlayerPlugin.pause({playerId:"bigbuckbunny720psurround"});
            console.log('const pause ', pause);
            const volume = await this._videoPlayerPlugin.getVolume({playerId:"bigbuckbunny720psurround"});
            console.log('const volume ', volume);
            const setVolume = await this._videoPlayerPlugin.setVolume({playerId:"bigbuckbunny720psurround",volume:.75});
            console.log('const setVolume ', setVolume);
            const volume1 = await this._videoPlayerPlugin.getVolume({playerId:"bigbuckbunny720psurround"});
            console.log('const volume1 ', volume1);
            const currentTime = await this._videoPlayerPlugin.getCurrentTime({playerId:"bigbuckbunny720psurround"});
            console.log('const currentTime ', currentTime);
            const setCurrentTime = await this._videoPlayerPlugin.setCurrentTime({playerId:"bigbuckbunny720psurround",seektime:420});
            console.log('const setCurrentTime ', setCurrentTime);
            const currentTime1 = await this._videoPlayerPlugin.getCurrentTime({playerId:"bigbuckbunny720psurround"});
            console.log('const currentTime1 ', currentTime1);
            const setMuted = await this._videoPlayerPlugin.setMuted({playerId:"bigbuckbunny720psurround",muted:true});
            console.log('const setMuted ', setMuted);
            const muted = await this._videoPlayerPlugin.getMuted({playerId:"bigbuckbunny720psurround"});
            console.log('const muted ', muted);
            setTimeout(async () => {
                const play = await this._videoPlayerPlugin.play({playerId:"bigbuckbunny720psurround"});
                console.log('const play ', play);
                setTimeout(async () => {
                    const setMuted = await this._videoPlayerPlugin.setMuted({playerId:"bigbuckbunny720psurround",muted:false});
                    console.log('const setMuted 1 ', setMuted);
                    const muted = await this._videoPlayerPlugin.getMuted({playerId:"bigbuckbunny720psurround"});
                    console.log('const muted 1 ', muted);
        
                }, 10000)
            },10000);
   
        },50000);
    }

}
