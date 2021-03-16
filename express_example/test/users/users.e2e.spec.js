const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;

describe("Testing users API", function () {

    after(async function () {
        await mongoose.connection.db.dropDatabase();
    })

    describe("Testing create API /users [POST]", function () {
        it("Creates a user successfully", function () {
            return request(app)
                .post('/users')
                .send({
                    username: "johnconor",
                    password: "1234",
                    firstName: "John",
                    lastName: "Conor"
                })
                .expect(201)
                .expect(res => {
                    return expect(res.body).to.have.property('_id');
                })
        })

        it("Fails to create the same user", function () {
            return request(app)
                .post('/users')
                .send({
                    username: "johnconor",
                    password: "2222",
                    firstName: "John",
                    lastName: "Conor"
                })
                .expect(409);
        })

        it.skip("Fails to create a user without username", function () {
            return request(app)
                .post('/users')
                .send({
                    password: "2222",
                    firstName: "John",
                    lastName: "Conor"
                })
                .expect(409);
        })
    })
})