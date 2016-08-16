import test from 'ava';
import isMate from './';

test('is-mate', t => {
	return isMate().then(data => {
		t.false(data);
	});
});
