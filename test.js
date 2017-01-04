import test from 'ava';
import fn from './';

test('10 indexes on either side', t => {
	const arr = ['a', 'b', 'c'];

  // defined indexes
	t.is(fn(arr, 0), 0);
	t.is(fn(arr, 1), 1);
	t.is(fn(arr, 2), 2);

  // positive undefined indexes
	t.is(fn(arr, 3), 0);
	t.is(fn(arr, 4), 1);
	t.is(fn(arr, 5), 2);
	t.is(fn(arr, 6), 0);
	t.is(fn(arr, 7), 1);
	t.is(fn(arr, 8), 2);
	t.is(fn(arr, 9), 0);
	t.is(fn(arr, 10), 1);

  // negative undefined indexes
	t.is(fn(arr, -1), 2);
	t.is(fn(arr, -2), 1);
	t.is(fn(arr, -3), 0);
	t.is(fn(arr, -4), 2);
	t.is(fn(arr, -5), 1);
	t.is(fn(arr, -6), 0);
	t.is(fn(arr, -7), 2);
	t.is(fn(arr, -8), 1);
	t.is(fn(arr, -9), 0);
	t.is(fn(arr, -10), 2);
});
