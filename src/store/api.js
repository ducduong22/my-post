import axios from 'axios'

const apis = {
  getPost: 'https://jsonplaceholder.typicode.com/posts',
}

export const getPost = async () => {
  const posts = await axios.get(apis.getPost)
  return posts.data
}

export default apis
