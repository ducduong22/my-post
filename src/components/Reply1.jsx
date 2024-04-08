import { useEffect, useState } from "react";

const Reply = ({ body, name }) => {
  return (
    <div className="mb-3">
      <div className="row">
        <div className="col-auto ms-3 mt-2 ">
          <img
            className="img rounded-circle"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_nLCu85ayoTKwYw6alnvrockq5QBT2ZWR2g&usqp=CAU"
          ></img>
        </div>
        <div className="col-10 mt-2 ">
          <div className="mb-1 text-capitalize namecomment_color">{name}</div>
          <div>{body}</div>
          <button className="bg-white text-dark  mb-2 btn btn-transparent fs-6 reply_color">
            Reply to
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reply;
