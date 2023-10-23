const addition = require('./addition')


describe('Add to numbers', () => {
    it(' 1 + 2 = 3 ', () => {
        expect(addition( 1 , 2 )).toBe(3)
    });

    it(' -2 + -4 = -6 ', () => {
        expect(addition( (-2) , (-4) )).toBe((-6))
    });

    
});