const mult = require('../src/mult')

it('Should return correct multiplication', () => {
    const result = mult(5,2)
    expect(result).toBe(10);
});