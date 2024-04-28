import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

// PureComponent
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
};

export default PostDetail;
