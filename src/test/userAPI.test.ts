import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import supertest from 'supertest';
import app from '../server';
import { prisma } from '../server';

const request = supertest(app); //supertest : to make HTTP request to API

describe('User RESTAPI', () => {  //test suite englobing test cases
  //1.connection to database before running any test(setup and teardown approach)
  beforeAll(async () => {
    await prisma.$connect();
  }, 60000);
//2.cleaning up the dataase and disconects after doing all tests(set and teardown approach)
  afterAll(async () => {
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  }, 60000);
  //Testcase 1 : Verifies if we can create a user successfully
  it('should create a new user', async () => {
    const res = await request.post('/users').send({ 
      name: 'Briso',
      email: 'example@gmail.com',
      age: 30,
    });
    //Tight assertions : checking the status code and response body(postitive Testing)
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('Briso');
  }, 30000);
  //Testcase 2 : verifies that we can retrieve users
  it('should get all users', async () => {
    const res = await request.get('/users'); //Act
    //Tight assertions : checking the status code and response body(postitive Testing)
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  }, 30000);
  //Testcase 3 : verify if user's info was updated through AAA pattern
  it("should update a user's info ", async () => {
    const res = await request.put('/users').send({ //Acte
      //Arange
      name: 'dev',
      email: 'example@gmail.com',
      age: 30,
    });
    //Assertions with postitive Testing
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('dev');
  }, 30000);
   //Testcase 4 : verify if a user is deleted
   it('should delete a user', async () => {
    const res = await request.delete('/users'); //Act
    //Assertions with postive testing
    expect(res.status).toBe(404);
    expect(res.body).toBe(Object);
  }, 30000);
});