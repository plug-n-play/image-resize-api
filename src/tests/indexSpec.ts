import myFunc from '../index'

describe("A suite", function() {
	it('expect myFunc to return a result five times the given input param', () => {
		expect(myFunc(5)).toBe(25);
		expect(myFunc(6)).not.toBe(31);
	})
});
