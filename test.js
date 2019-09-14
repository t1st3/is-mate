import test from 'ava';
import isMate from '.';

test('is-mate', async t => {
	t.is(await isMate, false);
});
