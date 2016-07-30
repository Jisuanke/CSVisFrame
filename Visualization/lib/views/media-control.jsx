import { createElement } from 'components';

function getClassName(name) {
   return 'jsk-btn jsk-link-muted jsk-icon-' + name;
}

const href = 'javascript:void(0);';
export const begin    = <a href={href} class={getClassName('fast-backward')}  />
export const backward = <a href={href} class={getClassName('backward')} />
export const play     = <a href={href} class={getClassName('play')} />
export const forward  = <a href={href} class={getClassName('forward')} />
export const end      = <a href={href} class={getClassName('fast-forward')} />

export default function ready(parentNode) {
  $(parentNode)
      .append(begin)
      .append(backward)
      .append(play)
      .append(forward)
      .append(end);
}
