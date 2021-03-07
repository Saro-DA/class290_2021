const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose');
const { expect } = require('chai');

describe('Testing users e2e', function () {

    after(async () => {
        await mongoose.connection.db.dropDatabase();
    })

    describe('Testing create user (POST /users)', function () {

        it('Creates the user successfully returning 201 HTTP status code', function () {
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

    describe('Testing getting users  (GET /users)', function () {
        let token;

        beforeEach(function () {
            return request(app)
                .post('/auth/login')
                .send({
                    username: "saro",
                    password: "1234"
                })
                .expect((res) => {
                    token = res.body.token;
                    return expect(res.body).to.have.property('token');
                })
        })

        it('Returns an array of users with length == 1', function () {
            return request(app)
                .get('/users')
                .set('Authorization', `Bearer ${token}`)
                .expect(200)
                .expect((res) => {
                    return expect(res.body.length).eql(1);
                })
        })

    });

});