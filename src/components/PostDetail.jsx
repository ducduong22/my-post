import { useSelector, useDispatch } from 'react-redux'

const PostDetail = () => {
  // useSelector dung de lay state trong reducer
  const posts = useSelector((state) => state.post.posts)

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
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PostDetail;
