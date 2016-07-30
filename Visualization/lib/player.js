import { speed } from 'settings';
import { slider } from './views/slider';
import * as buttons from './views/media-control';
import { empty } from './views';

let step = 0;
let state = PAUSE;
let list;

const PLAY = {}, PAUSE = {}, STOP = {};

function showPlayButton() {
    $(buttons.play).removeClass('jsk-icon-pause').addClass('jsk-icon-play')
}

function showPauseButton() {
    $(buttons.play).removeClass('jsk-icon-play').addClass('jsk-icon-pause');
}

export function ready() {
    slider.on('settled.progress-slider.jsk', function (event) {
        setStep(event.newStep);
    });

    $(buttons.play).click(() => {
        if (state === PAUSE) {
            play();
        } else if (state === STOP) {
            replay();
        } else {
            pause();
        }
    });

    $(buttons.forward).click(forceNext);
    $(buttons.backward).click(forcePrevious);
    $(buttons.begin).click(forceBegin);
    $(buttons.end).click(forceEnd);
}

function playCurrent() {
    slider.progressSlider('go', step);
    let state = list.get(step);
    if (state) {
        state.draw(speed / 2);
    }
}

export function play() {
    state = PLAY;
    playCurrent();
    showPauseButton();

    setTimeout(() => {
        if (state === PLAY && (step += 1) < length()) {
            play();
        } else if (step >= length()) {
            stop();
        }
    }, speed);
}

export function pause() {
    state = PAUSE;
    showPlayButton();
}

function replay() {
    state = PLAY;
    step = 0;
    showPlayButton();
    play();
}

export function stop() {
    state = STOP;
    step = length() - 1;
    showPlayButton();
}

export function forceNext() {
    pause();
    if (step < (length() - 1)) {
        step += 1;
    }
    playCurrent();
}

export function forcePrevious() {
    pause();
    if (step > 0) {
        step -= 1;
    }
    playCurrent();
}

function forceBegin() {
    pause();
    step = 0;
    playCurrent();
}

function forceEnd() {
    stop();
    playCurrent();
}

export function setStep(newStep) {
    step = newStep;
    playCurrent();
    if (step === (length() - 1)) {
        stop()
    } else if (state === STOP) {
        pause();
    }
}

function length() {
    if (list) {
        return list.length
    } else {
        throw new Error();
    }
    return list ? list.length : 0;
}

function updateSlider() {
    slider.progressSlider('setTotalStep', length() - 1);
    if (state === STOP && step !== length() - 1) {
        state = PAUSE;
    }
}

export function mount(algorithm, duration = 250) {
    // Remove event listener on previous algorithm.
    if (list) {
        list.off(updateSlider);
    }

    empty();

    // Draw initial state.
    algorithm.initState.draw(duration);

    // Listen to states list change.
    list = algorithm.states;
    list.on('change', updateSlider);

    step = 0;
    pause();
    updateSlider();
}
