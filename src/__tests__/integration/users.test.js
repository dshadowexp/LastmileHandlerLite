import request from 'supertest';
import { createServer } from './../../server.js';

const [server, _] = createServer();

describe('User', () => {
    beforeEach(() => {})
    afterEach(() => {

    })
    describe('POST /users', () => {
        describe('given a valid username and password', async () => {
            const data = {
                email: "sam@gmail.com",
                password: "12345"
            }
            const response = await request(server).post('/users').send(data);
            it("should save the username and password to the database", () => {

            })
            it("should response with json object containing the user _id", () => {

            })
            it("should respond with a 201 status code", () => {
                expect(response.statusCode).toBe(201);
            })
        })  

        // describe('when the username or password is missing', () => {
        //     // should respond with a 400 status code 
        // })
    })
})