import './polyfill';
import 'core-js/fn/map';
import 'core-js/fn/array/from';
import 'core-js/fn/array/includes';
import 'core-js/fn/object/assign';
import 'core-js/fn/string/includes';
import 'core-js/fn/string/starts-with';
import 'core-js/fn/string/ends-with';
import 'core-js/fn/math/log2';

export * from './Algorithm';
export { config } from 'settings';
export { mount, empty } from './views';
export * as player from './player';
export { status } from './views/guide';
