import { createElement } from 'components';

const className = "jsk-va-zoom jsk-btn jsk-btn-primary";

export const zoomIn = <a class={className}>+</a>;
export const zoomOut = <a class={className}>-</a>
export const zoomReset = (
	<a class={className}>
		<span style={{ fontSize: '0.9em' }}>x1</span>
	</a>
);

export default function mount(parentNode) {
	$(parentNode).append(
		<div style={{ position: 'absolute', left: '10px', bottom: '42px' }} class="jsk-btn-group-stacked">
			{zoomIn}
			{zoomOut}
			{zoomReset}
		</div>
	);
}
