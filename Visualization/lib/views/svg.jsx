import { ARROW, MAIN_SVG } from 'constants';
import { config, createElement } from 'components';
import { zoomIn, zoomOut, zoomReset } from './zoom';
import '../submodules/jquery.panzoom';

export const main = (
	<svg>

		<filter id="drop-shadow" data-persist>
			<feGaussianBlur in="SourceAlpha" stdDeviation="1"></feGaussianBlur>
			<feOffset dx="0.05" dy="0.15" result="offsetblur" />
			<feFlood flood-color="rgba(0, 0, 0, 0.2)"/>
	  	<feComposite in2="offsetblur" operator="in"/>
			<feMerge>
				<feMergeNode />
				<feMergeNode in="SourceGraphic" />
			</feMerge>
		</filter>

		<g data-va-ref="marker" data-persist>
			<marker id="forwardArrow"
				viewBox="0 -5 10 10"
				refX={ARROW.REFX}
				markerWidth={ARROW.MARKER_WIDTH}
				markerHeight={ARROW.MARKER_HEIGHT}
				orient="auto">
				<path d="M0,-5 L10,0 L0,5" fill={ARROW.FILL} />
			</marker>
			<marker id="backwardArrow"
				viewBox="-10 -5 10 10"
				refX={-1 * ARROW.REFX}
				markerWidth={ARROW.MARKER_WIDTH}
				markerHeight={ARROW.MARKER_HEIGHT}
				orient="auto">
				<path d="M0,-5 L-10,0 L0,5" fill={ARROW.FILL} />
			</marker>
		</g>

	</svg>
);

config({ parentNode: main });

export default function ready(parentNode) {
	$(parentNode).append(<div>{main}</div>);
	$(main).on('dblclick', function () {
		$(zoomIn).click();
	}).panzoom({
		$zoomIn: $(zoomIn),
		$zoomOut: $(zoomOut),
		$reset: $(zoomReset),
	});
}

export function empty() {
	$(main).children()
		.filter(':not([data-persist])')
		.find('*')
		.attr('opacity', 0);
}
