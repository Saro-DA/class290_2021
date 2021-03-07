const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose');
const { expect } = require('chai');

describe('Testing authentication e2e', function () {
    before(function () {
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

    after(async function () {
        await mongoose.connection.db.dropDatabase();
    })

    describe('Testing a successful login', function () {
        it('It should return a token when username and password is correct', function () {
            return request(app)
                .post('/auth/login')
                .send({
                    username: "saro",
                    password: "1234"
                })
                .expect((res) => {
                    return expect(res.body).to.have.property('token');
                })
        });
    })

    describe('Testing a failed login', function () {
        it('It should return an Unauthorized error if the username is invalid', function () {
            return request(app)
                .post('/auth/login')
                .send({
                    username: "wrong",
                    password: "1234"
                })
                .expect(401)
                .expect((res) => {
                    return expect(res.body).eql({ message: "Unauthorized" });
                })
        });

        it('It should return an Unauthorized error if the password is invalid', function () {
            return request(app)
                .post('/auth/login')
                .send({
                    username: "saro",
                    password: "wrong"
                })
                .expect(401)
                .expect((res) => {
                    return expect(res.body).eql({ message: "Unauthorized" });
                })
        });
    })
})