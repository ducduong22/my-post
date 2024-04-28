import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getComments,
} from "../containers/comment/commentSlice";

// Component
const Comment = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const comments = useSelector(({ comment }) => comment.comments);
  const errorMsg = useSelector(({ comment }) => comment.error);
  
  useEffect(() => {
    dispatch(getComments(id));
  }, []);

  return (
    <div className="mb-3">
      {comments.map(({ id, name, body }) => (
        <div className="row" key={id}>
          <div className="col-auto ms-3 mt-2 ">
            <img
              className="img rounded-circle"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_nLCu85ayoTKwYw6alnvrockq5QBT2ZWR2g&usqp=CAU"
            ></img>
          </div>
          <div className="col-10 mt-2 ">
            <div className="mb-1 text-capitalize nameComment_color">{name}</div>
            <div>{body}</div>
            <button className="bg-white text-dark  mb-2 btn btn-transparent fs-6 reply_color">
              Reply to
            </button>
          </div>
        </div>
      ))}

      {errorMsg && <div className="text-danger">{errorMsg}</div>}
    </div>
  );
};

export default Comment;
