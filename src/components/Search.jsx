import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
const InputStyled = styled.input`
  background-color: transparent;
  border: none;
  height: 100%;
  font-size: 20px;
  width: 300px;
  color: #000;
`;
const InputwrapperStyled = styled.div`
  width: 300px;
  height: 100%;
  border: none;
  box-shadow: 0px 0px 8px #ddd;
  background-color: white;
  margin-bottom: 50px;
  border-radius: 8px;
`;

export const Search = () => {
  const postId = useSelector((state) => state.post.postId);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          const filteredData = data.filter((post) =>
            post.title.toLowerCase().includes(searchTerm)
          );
          setFilteredPosts(filteredData);
        });
    }
  };
  return (
    <div>
      <InputwrapperStyled>
        <InputStyled
          type="text"
          id="search-bar"
          placeholder="Nhập tiêu đề bài đăng"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        ></InputStyled>
      </InputwrapperStyled>
    </div>
  );
};
export default Search;
