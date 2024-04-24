// importing the module sum
const sum = require('./sum')

// describing the test case
describe("determing sum of integers",()=>{
  // writing the test case
  test("sum of integers",()=>{
    const num1 = 27
    const num2 = 10
    expected = 37

    const actual = sum(num1,num2)

    //Testing condition
    expect(actual).toBe(expected)
  })
})