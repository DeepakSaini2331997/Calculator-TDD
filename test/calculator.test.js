const { add } = require('../addFunction')

// write all test cases related to add function
describe('Calculator',()=>{
    test('should return 0 if input is empty string',()=>{
        expect(add("")).toBe(0)
    })

    test('should return number if input is single number',()=>{
        expect(add("1")).toBe(1)
    })

    test('should return sum if input is two comma-separated',()=>{
        expect(add("1,2")).toBe(3)
    })

    test('should return sum if input is multiple comma-separated',()=>{
        expect(add("1,2,3,4,5")).toBe(15)
    })

    test('should handle new line input is multiple comma-separated',()=>{
        expect(add("1\n2,3")).toBe(6)
    })

    test('should support delimiters the format //;\n1;2', () => {
        expect(add("//;\n1;2")).toBe(3);
    })

})