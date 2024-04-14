import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const PostDetail = () => {
  // thử gọi là API xong rồi
  // useSelector dung de lay state trong reducer
  // const posts = useSelector((state) => state.post.posts);
  const postdetail = useSelector((state) => state.post.postdetail);

  return (
    <div>
      <div className=" mb-5 border-bottom">
        <h2 className="text-uppercase text-center fs-4 fw-bold ">
          {postdetail.title}
        </h2>
        <div className="fw-bolder">Author: John Smith</div>
        <div className="fw-bolder">Create at: Sep 20,2019</div>
        <div className="text-capitalize  mt-4">{postdetail.body}</div>
      </div>
    </div>
  );
  {
    /*
  const { id } = useParams();
  // thử gọi là API xong rồi
  // useSelector dung de lay state trong reducer
  const postId = useSelector((state) => state.post.postId);
  const posts = useSelector((state) => state.post.posts);
  const post = posts.find((post) => post.id === parseInt(id));
  return (
    <div>
      <div>
        <div className=" mb-5 border-bottom" key={post.id}>
          <h2 className="text-uppercase text-center fs-4 fw-bold ">
            {post.title}
          </h2>
          <div className="fw-bolder">Author: John Smith</div>
          <div className="fw-bolder">Create at: Sep 20,2019</div>
          <div className="text-capitalize  mt-4">{post.body}</div>
        </div>
      </div>
    </div>
  );*/
  }
};
export default PostDetail;
