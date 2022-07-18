import resizeImage from '../resizeImage';
import { existsSync, unlinkSync } from 'fs';

describe('Test resizeImage utility', () => {
	const path = 'images/resized/fjord_300_400.jpg';

	if (existsSync(path)) {
		unlinkSync(path)
	}

	resizeImage('fjord', 'fjord_300_400.jpg', 300, 400);

	it('check if a resized image gets created', () => {
		expect(existsSync(path)).toBe(true)
	});
});
