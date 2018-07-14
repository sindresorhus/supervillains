import test from 'ava';
import supervillains from '.';

test('main', t => {
	t.true(supervillains.all.length > 0);
	t.true(supervillains.all.includes('Mud Pack'));
	t.truthy(supervillains.random());
});
