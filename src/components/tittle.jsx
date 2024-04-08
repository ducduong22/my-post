const Title1 = (post) => {
  return (
    <div>
      <h2 className="text-uppercase text-center fs-4 fw-bold ">{post.title}</h2>
      <div className="fw-bolder">Author: John Smith</div>
      <div className="fw-bolder">Create at: Sep 20,2019</div>
    </div>
  );
};

export default Title1;
