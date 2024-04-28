import axios from 'axios'

const apiUrl = {
  getPost: 'https://jsonplaceholder.typicode.com/posts',
  getComment: (id) =>
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
}

export const getPost = async () => {
  const posts = await axios.get(apiUrl.getPost)
  return posts.data
}

export const getCommentAPI = async (id) => {
  const comments = await axios.get(apiUrl.getComment(id))
  return comments.data
}

export default apiUrl
