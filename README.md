# fps-meter
JS FPS meter. This is an alpha!

## Install
```bash
npm i @thibka/fps-meter
```

## Usage
This code will display the average FPS in the console every 3 seconds.
```javascript
import FPSMeter from '@thibka/fps-meter';

function loop() {
    requestAnimationFrame(loop);
    if (FPSMeter.isOn) FPSMeter.update();
}

function initFPSMeter() {
    FPSMeter.start();
    setInterval(function () {
        FPSMeter.calculateMean();
        console.log("FPS: " + FPSMeter.mean);
        FPSMeter.reset();
    }, 3000);
}

initFPSMeter();
loop();
```

