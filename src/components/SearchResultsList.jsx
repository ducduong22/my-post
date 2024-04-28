import { useEffect, useState, useCallback } from "react";
import Post from "./Post";

export const SearchResultsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  return (
    <div className="results-list">
      <ul id="post-list">
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Post key={post.id} title={post.title} body={post.body} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SearchResultsList;
