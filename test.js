import test from 'ava';
import supervillains, {randomSupervillain} from './index.js';

test('main', t => {
	t.true(supervillains.length > 0);
	t.true(supervillains.includes('Mud Pack'));
	t.truthy(randomSupervillain());
});
