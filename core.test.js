import {describe, test, expect} from 'vitest';
import { isPriceInRange } from './core';

// Boundary Testing
// test cases
// test 1 : doit retourner false si le price < min
// test 2 : doit retourner false si le price > max
// test 1 : doit retourner true si le price est compris entre le min et le max
// test 4 : doit retourner true si price est egale a min
// test 1 : doit retourner true si price est egle a max
// Methode native
// describe('IsPriceRange',()=>{
//     test("doit retourner false si le price < min",()=>{
//         // Arrange
//         const min = 0;
//         const max = 100
//         const price = -10
//         const result = false

//         // Act
//         const actualResult = isPriceInRange(price,min,max)

//         // Assert
//         expect(actualResult).toBe(result)
//     })
// })

describe('IsPriceRange',()=>{
    test("doit retourner false si le price < min",()=>{
        expect(isPriceInRange(-10,0,100)).toBe(false)
    });
    test("doit retourner false si le price > max",()=>{
        expect(isPriceInRange(110,0,100)).toBe(false)
    });
    test("doit retourner true si le price est entre le min et max",()=>{
        expect(isPriceInRange(20,0,100)).toBe(true)
    });
    test("doit retourner true si le price = min",()=>{
        expect(isPriceInRange(0,0,100)).toBe(true)
    });
    test("doit retourner true si le price = max",()=>{
        expect(isPriceInRange(100,0,100)).toBe(true)
    });
})