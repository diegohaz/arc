export const schema = `
  
  type Post {
      id: String
      title: String
      body: String
    }
`

export const resolvers = {
  Post: {
    id: (post) => post.id,
    title: (post) => post.title,
    body: (post) => post.body
  }
}
