import casual from 'casual'

const mocks = {
  String: () => casual.title,
  Int: () => casual.number,
  Post: () => ({
    id: casual.number,
    title: casual.title,
    body: casual.text
  }),
}

export default mocks
