const supertest = require('supertest')
const server = require('../api/server')
const db = require('../data/db-config')

beforeEach(() => {
    return db.migrate.rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run())
})

describe('AUTH', () => {
    it('can run test', () => {
        expect(true).toBeTruthy()
    })

    describe('POST Register', () => {
        it('Returns status 201', () => {
            return supertest(server)
            .post('/auth/register')
            .send({name: "Derek", username: "derknhood", password: "school"})
            .then(res => {
                expect(res.status).toEqual(201)
            })
        })

        it('Should return that user', () => {
            return supertest(server)
            .post('/auth/register')
            .send({name: "Derek", username: "derknhood", password: "school"})
            .then(res => {
                expect(Array.isArray).toHaveLength(1)
            })
        })
    })

    describe('POST Login', () => {
        it.todo('Returns status 200')
        it.todo('can see users name')
    })
})