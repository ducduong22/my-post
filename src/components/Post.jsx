import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Reply from "./Reply";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setPosts,
  setComments,
  setPostId,
  setpostdetail,
} from "../store/postSlice";
import PostDetail from "./PostDetail";

const Post = () => {
  // const [comments, setComments] = useState([]);
  // const [postId, setPostId] = useState(0);

  // useSelector dung de lay state trong reducer
  const posts = useSelector((state) => state.post.posts);
  const comments = useSelector((state) => state.post.comments);
  const postId = useSelector((state) => state.post.postId);
  const postdetail = useSelector((state) => state.post.postdetail);

  // dispatch dung de thuc thi action cai ma thay doi state trong reducer
  const dispatch = useDispatch();

  useEffect(() => {
    const getDataPost = async () => {
      const getpost = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await getpost.json();

      dispatch(setPosts(data));
    };

    getDataPost();
  }, []);

  // Khai báo hàm toggleComments nhận đầu vào là postId
  const toggleComments = async (id) => {
    const { data: commentList } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    if (!comments.length || postId !== id) {
      dispatch(setComments(commentList));
      dispatch(setPostId(id));
      console.log(commentList);
    }
    // else {
    //   dispatch(setComments([]));
    //   dispatch(setPostId(0));
    // }
  };

  const getdetail = async (id) => {
    const { data: detail } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!postdetail.length || postId !== id) {
      dispatch(setpostdetail(detail));
      dispatch(setPostId(id));
      console.log(detail);
    }
    // else {
    //   dispatch(setpostdetail([]));
    //   dispatch(setPostId(0));
    //   console.log("loi");
    // }
  };
  return (
    <div>
      <div>
        {posts.map((post) => {
          return (
            <div className=" mb-5 border-bottom" key={post.id}>
              <h2 className="text-uppercase text-center fs-4 fw-bold ">
                {post.title}
              </h2>
              <div className="fw-bolder">Author: John Smith</div>
              <div className="fw-bolder">Create at: Sep 20,2019</div>
              <div className="text-capitalize  mt-4">{post.body}</div>

              <Link to={`/post/${post.id}`} onClick={() => getdetail(post.id)}>
                Detail
              </Link>
              <Link
                className="ps-5"
                to={`/post/${post.id}/comments`}
                onClick={() => toggleComments(post.id)}
              >
                Reply
              </Link>
              {/* Hiển thị bình luận nếu showComments[postId] là true */}
              {/* toan tu !! de chac chan length = 0 la false */}

              {/* <button
                className="bg-white text-dark mx-3 mt-5 mb-2 btn btn-transparent fs-6 reply_color"
                onClick={() => toggleComments(post.id)}
              >
                Reply
              </button> */}
              {/* Hiển thị bình luận nếu showComments[postId] là true */}
              {/* toan tu !! de chac chan length = 0 la false */}
              {/* {!!comments.length && postId === post.id && (
                <div>
                  {comments.map(({ id, name, body }) => (
                    <Reply key={id} name={name} body={body} />
                  ))}
                </div>
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Post;
