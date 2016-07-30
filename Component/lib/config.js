import merge from 'lodash-es/merge';

const configuration = {
	parentNode: null,
	colors: {
		default: '#FFCB1F',
	    visiting: '#DE3E1E',
	    visited: '#41B146',
	    flagged: '#FF8E00',
	    blank: '#F5F5F5',
	    marked: '#2996F3',
	    ignored: '#DCDCDC'
	},
	markers: {
		forward: '#forwardArrow',
		backward: '#backwardArrow'
	}
};

export default configuration;

export function config(obj) {
	merge(configuration, obj);
}
