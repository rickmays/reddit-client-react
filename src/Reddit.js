import { useEffect } from "react";
import SearchBar from "./SearchBar";
import fetchRedditPosts from "./fetchRedditPosts";
import "./Reddit.css";

const Reddit = ({
  inputValue,
  setInputValue,
  handleSubmit,
  posts,
  setPosts,
  error,
  setError,
  subreddit,
}) => {
  useEffect(() => fetchRedditPosts(subreddit, setPosts, setError), [subreddit, setPosts, setError])

  // Render
  return (
    <div>
      <SearchBar
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={(e) => handleSubmit(e)}
      />
      <div id="posts">
        <h3>
          <span className="scoreComments">Score Comments</span> Title
        </h3>
        <ul>
          {error
            ? error
            : posts
                .sort((a, b) => (a.score < b.score) - (a.score > b.score))
                .map((post) => (
                  <li key={post.id}>
                    <span className="scoreComments">
                      {post.score} {post.num_comments}
                    </span>
                    <a href={post.url} target="blank">
                      {" "}
                      {post.title}
                    </a>
                  </li>
                ))}
        </ul>
      </div>
    </div>
  );
};

export default Reddit;
