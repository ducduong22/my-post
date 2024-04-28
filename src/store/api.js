import axios from "axios";

const apis = {
  getPost: "https://jsonplaceholder.typicode.com/posts",

  // getComment: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
};

export const getPost = async () => {
  const posts = await axios.get(apis.getPost);
  console.log(getPost);
  return posts.data;
};
export const getComment = async (id) => {
  const comments = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  console.log(comments);
  return comments.data;
};
export default apis;
