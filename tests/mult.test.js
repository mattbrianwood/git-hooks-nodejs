const mult = require('../src/mult')

it('should return the correct product', () => {
    const result = mult(2, 5)
    expect(result).toBe(10)
})