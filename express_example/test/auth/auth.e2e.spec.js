const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;

describe("Testing auth API", function () {

    before(async function () {
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

    after(async function () {
        await mongoose.connection.db.dropDatabase();
    })

    describe("Testing login API /auth/login [POST]", function () {

        it("Logs in a user successfully", function () {
            return request(app)
                .post('/auth/login')
                .send({
                    username: "johnconor",
                    password: "1234"
                })
                .expect(200)
                .expect(res => {
                    return expect(res.body).to.have.property('token');
                })
        })
    })
})