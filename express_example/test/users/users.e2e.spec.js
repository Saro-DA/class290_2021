const { describe } = require('mocha');
const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');

describe('Testing users e2e', function() {

    after(async () => {
        await mongoose.connection.db.dropDatabase();
        await mongoose.connection.close();
    })

    describe('Testing create user', function() {

        it('Creates the user successfully returning 201 HTTP status code', function() {
            return request(app)
            .post('/users')
            .send({
                username: "saro",
                firstName: "Saro",
                lastName: "Deravanesian",
                password: "1234"
            })
            .expect(201)
        })

    })

});