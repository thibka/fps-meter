var FPSMeter = {
    meanSamples: [],
    lastCalledTime: false,
    fps: false,
    isOn: false
}

/**
 * FPSMeter.update() in a requestAnimationFrame loop
 * returns the delta between two calls.
 */
FPSMeter.update = function (delta) {
    if (!delta) {
        var now = performance.now();
        if (!FPSMeter.lastCalledTime) {
            FPSMeter.lastCalledTime = now;
            FPSMeter.fps = 0;
            return;
        }
        var delta = (now - FPSMeter.lastCalledTime) / 1000;
        FPSMeter.lastCalledTime = now;
    }

    FPSMeter.fps = 1 / delta;

    FPSMeter.meanSamples.push(FPSMeter.fps);
    //console.log(FPSMeter.fps);
    return FPSMeter.fps;
}

FPSMeter.calculateMean = function () {
    let total = 0;
    FPSMeter.meanSamples.forEach(function (sample) {
        total += sample;
    })
    FPSMeter.mean = total / FPSMeter.meanSamples.length;

    return FPSMeter.mean;
}

FPSMeter.start = function () {
    FPSMeter.isOn = true;
}

FPSMeter.stop = function () {
    FPSMeter.isOn = false;
}

FPSMeter.reset = function () {
    FPSMeter.meanSamples = [];
}

export default FPSMeter;