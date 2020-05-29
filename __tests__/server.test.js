const supertest = require('supertest')
const server = require('../api/server')

describe('SERVER', () => {
    it('can run test', () => {
        expect(true).toBeTruthy()
    })

    describe('TEST GET', () => {
        it('Returns status 200', () => {
            return supertest(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
        })

        it.todo('returns `api: Running Successfully!`')
    })
})

