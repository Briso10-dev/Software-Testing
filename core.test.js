import {describe, test, expect, it,beforeEach,afterEach} from 'vitest';
import { isPriceInRange } from './core';

// Boundary Testing
// test cases
// test 1 : doit retourner false si le price < min
// test 2 : doit retourner false si le price > max
// test 1 : doit retourner true si le price est compris entre le min et le max
// test 4 : doit retourner true si price est egale a min
// test 1 : doit retourner true si price est egle a max
// Methode native: AAA pattern
describe('IsPriceRange',()=>{
    test("doit retourner false si le price < min",()=>{
        // Arrange
        const min = 0;
        const max = 100
        const price = -10
        const result = false

        // Act
        const actualResult = isPriceInRange(price,min,max)

        // Assert
        expect(actualResult).toBe(result)
    })
})

//1.Parameterized Tests

describe('IsPriceRange',()=>{
    it.each([
        { scenario: 'price < min', price: -10, min:0, max:100, result:false},
        { scenario: 'price > max', price: -110, min:0, max:100, result:false},
        { scenario: 'price entre min et max' , price: 20, min:0, max:100, result:true},
        { scenario: 'price = min', price: 0, min:0, max:100, result:true},
        { scenario: 'price = max', price: 100, min:0, max:100, result:true},
    ])(`doit me retourner $result si $scenario`,({price,min,max,result})=>{
        expect(isPriceInRange(price,min,max)).toBe(result)
    })
})
// 2. Setup and teardown

describe('IsPricechange', () => {
    let min, max, price
  
    beforeEach(() => {
      min = 100;
      max = 1000;
      price = 200;
    });
    afterEach(() => {
        // Clean up the test data
        min = undefined;
        max = undefined;
      });
    // Test case : Verification du prix dans l'intervalle
    test('le prix doit etre dans cette intervalle', () => {
      expect(isPriceInRange(price,min,max)).toBe(true);
    });
    // Test case : Verifica
    test("le prix n'est plus dans cette intervalle", () => {
        min = 10000
        max = 20000
        price = 5000
        expect(isPriceInRange(price,min,max)).toBe(false);
      });
  });