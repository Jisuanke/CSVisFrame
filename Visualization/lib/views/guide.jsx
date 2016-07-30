import * as _ from 'lodash';
import { codemirror } from 'settings';
import { createElement } from 'components';

const className = 'highlighted';
const where = 'text';

export const guideContainer = <p />;

export default function ready(parentNode): void {
	$(parentNode).children().remove();
	$(parentNode).append(guideContainer);
}

export function status(text: string) {
	guideContainer.innerHTML = text;
}

let previousHighlights = [];

class Codes {
	constructor(codes, highlight, status) {
		this.codes = codes;
		this.highlight = highlight;
		this._status = status;
	}
	draw() {
		if (this.codes !== codemirror.getValue()) {
			codemirror.setValue(this.codes);
		}

		for (let line of _.difference(previousHighlights, this.highlight)) {
			codemirror.removeLineClass(line, where, className);
		}

		for (let line of this.highlight) {
			codemirror.addLineClass(line, where, className);
		}

		status(this._status);
		previousHighlights = this.highlight;
	}
	clone() {
		return new Codes(this.codes, this.highlight, this._status);
	}
}

export function codetrace(codes, highlight, status) {
	if (Array.isArray(codes)) {
		codes = codes.join('\n');
	}
	return new Codes(codes, highlight, status);
}
