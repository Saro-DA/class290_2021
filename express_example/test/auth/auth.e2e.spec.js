const request = require('supertest');
const app = require('../../src/app');
const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;

describe("Testing auth API", function () {
    let lockedUserId;

    before(async function () {
        await request(app)
            .post('/users')
            .send({
                username: "willsmith",
                password: "12345",
                firstName: "Will",
                lastName: "Smith",
                role: "customer",
            })
            .expect(201)
            .expect(res => {
                lockedUserId = res.body._id;
                return expect(res.body).to.have.property('_id');
            });

        return request(app)
            .post('/users')
            .send({
                username: "johnconor",
                password: "1234",
                firstName: "John",
                lastName: "Conor",
                role: "admin"
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

    describe('Testing locking user after 3 unsuccessful successive logins', function () {
        it('It should lock the user after 3 failed logins.', async function () {
            await request(app).post('/auth/login').send({
                username: "willsmith",
                password: "wrong"
            });

            await request(app).post('/auth/login').send({
                username: "willsmith",
                password: "wrong"
            });

            await request(app).post('/auth/login').send({
                username: "willsmith",
                password: "wrong"
            })
                .expect(423)
                .expect((res) => {
                    return expect(res.body).eql({ message: "The user is locked!" });
                });;
        });
    })

    describe('Testing unlocking a locked user', function () {
        let token;

        beforeEach(function () {
            return request(app)
                .post('/auth/login')
                .send({
                    username: "johnconor",
                    password: "1234"
                })
                .expect((res) => {
                    token = res.body.token;
                    return expect(res.body).to.have.property('token');
                })
        })

        it('Unlocks a locked user with admin privileges', function () {
            return request(app)
                .patch(`/admin/unlock-user/${lockedUserId}/`)
                .set('Authorization', `Bearer ${token}`)
                .expect(200)
                .expect((res) => {
                    return expect(res.body).eql({ message: "User has successfully been unlocked!" });
                })
        })
    });
})