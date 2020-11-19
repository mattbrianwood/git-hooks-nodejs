const sum = require('../src/sum')

it('should return the correct sum', () => {
    const result = sum(2, 5)
    expect(result).toBe(7)
})