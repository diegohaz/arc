// https://github.com/diegohaz/arc/wiki/Sagas
import { all, fork } from 'redux-saga/effects'

const req = require.context('.', true, /\.\/.+\/sagas\.js$/)

const sagas = req.keys().map(key => req(key).default)

export default function* (services = {}) {
  yield all(sagas.map(saga => fork(saga, services)))
}
