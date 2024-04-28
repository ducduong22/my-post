import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router";

const PostDetail = () => {
  const postDetail = useSelector((state) => state.post.postDetail);
  return (
    <div>
      <div className=" mb-5 border-bottom">
        <h2 className="text-uppercase text-center fs-4 fw-bold ">
          {postDetail.title}
        </h2>
        <div className="fw-bolder">Author: John Smith</div>
        <div className="fw-bolder">Create at: Sep 20,2019</div>
        <div className="text-capitalize  mt-4">{postDetail.body}</div>
      </div>
    </div>
  );

  // const { id } = useParams();
  // const posts = useSelector((state) => state.post.posts);
  // const post = posts.find((post) => post.id === parseInt(id));
  // return (
  //   <div>
  //     <div>
  //       <div className=" mb-5 border-bottom" key={post.id}>
  //         <h2 className="text-uppercase text-center fs-4 fw-bold ">
  //           {post.title}
  //         </h2>
  //         <div className="fw-bolder">Author: John Smith</div>
  //         <div className="fw-bolder">Create at: Sep 20,2019</div>
  //         <div className="text-capitalize  mt-4">{post.body}</div>
  //       </div>
  //     </div>
  //   </div>
  // );
};
export default PostDetail;
