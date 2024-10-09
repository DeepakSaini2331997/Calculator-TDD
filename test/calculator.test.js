const { add } = require('../addFunction')

// write all test cases related to add function
describe('Calculator',()=>{
    test('should return if input is empty string',()=>{
        expect(add("")).toBe(0)
    })
})