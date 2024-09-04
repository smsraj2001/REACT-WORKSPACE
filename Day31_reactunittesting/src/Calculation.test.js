import { add, sub } from "./Calculation"

test('Add Test', () => { 
    expect(add(1, 1)).toBe(2);

})

test('Subtract Test', () => {
    expect(sub(1, 1)).toBe(0);
})