import { containers as ctx } from 'settings';

import svg from './svg';
import slider from './slider';
import zoom from './zoom';
import guide from './guide';
import media from './media-control';
import * as player from '../player';

// Append the nodes to the actual containers.
export function mount() {
    svg(ctx.SVG);
    zoom(ctx.SVG);
    guide(ctx.guide);
    slider(ctx.progressBar);
    media(ctx.player);
    player.ready();
}

export { empty } from './svg';
