import { createElement } from 'components';

export const slider = $(createElement('div', {
    'data-description': 'progress-bar',
    'data-jsk-progress-slider': {
        allowExceeding: true,
        totalStep: 1,
        draggable: true
    }
}));

// Populate the slider container
export default function ready(parentNode) {
    $(parentNode).append(slider);
    slider.progressSlider();
}
