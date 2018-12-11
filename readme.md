# Ionic App to test the capacitor-video-player plugin
Example of a Ionic Application to test and validate the Capacitor Video Player Plugin

[capacitor-video-player](https://github.com/jepiqueau/capacitor-video-player)

## To run this Project
### Clone the project

clone this repo to a new directory:

```bash
git clone https://github.com/jepiqueau/ionic-capacitor-videi-player.git ionic-capacitor-video-player
cd ionic-capacitor-video-player
git remote rm origin
npm install
```

### init capacitor

```bash
npx cap init IonicCapacitorVideoPlayer com.example.ioniccapacitorvideoplayer
```

### first project build

```bash
npm run build
```

### Adding IOS Platforms
```bash
npx cap add ios
```

### Building App for Targeted Platforms

```bash
npx cap update
npm run build
npx cap copy
```

### running on IOS

```bash
npx cap open ios
``` 

Xcode will be opened with your project and will index the files. When completed, clean the build folder, create the build, select your apple device or emulator and click on the run button. The application should display four buttons. Click on them


### In the App

Click on Test Video Player button, a video should play.



