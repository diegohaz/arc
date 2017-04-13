import { fork } from 'redux-saga/effects'

const req = require.context('.', true, /\.\/.+\/sagas\.js$/)

const sagas = []

req.keys().forEach((key) => {
  sagas.push(req(key).default)
})

export default function* () {
  yield sagas.map(fork)
}
