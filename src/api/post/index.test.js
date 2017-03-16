import request from 'supertest'
import express from 'services/express'
import routes, { Post } from '.'
import '../../../test/db'

const app = express(routes)

let post

beforeEach(async () => {
  post = await Post.create({})
})

test('POST /posts 201', async () => {
  const { status, body } = await request(app)
    .post('/')
    .send({ title: 'test', body: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.title).toEqual('test')
  expect(body.body).toEqual('test')
})

test('GET /posts 200', async () => {
  const { status, body } = await request(app)
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /posts/:id 200', async () => {
  const { status, body } = await request(app)
    .get(`/${post.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(post.id)
})

test('GET /posts/:id 404', async () => {
  const { status } = await request(app)
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /posts/:id 200', async () => {
  const { status, body } = await request(app)
    .put(`/${post.id}`)
    .send({ title: 'test', body: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(post.id)
  expect(body.title).toEqual('test')
  expect(body.body).toEqual('test')
})

test('PUT /posts/:id 404', async () => {
  const { status } = await request(app)
    .put('/123456789098765432123456')
    .send({ title: 'test', body: 'test' })
  expect(status).toBe(404)
})

test('DELETE /posts/:id 204', async () => {
  const { status } = await request(app)
    .delete(`/${post.id}`)
  expect(status).toBe(204)
})

test('DELETE /posts/:id 404', async () => {
  const { status } = await request(app)
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
