import casual from 'casual'

const mocks = {
  String: () => casual.title,
  Int: () => casual.number,
}

export default mocks
