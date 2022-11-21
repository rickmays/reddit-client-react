import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import "./Reddit.css";
// Destructure the 'subreddit' from props:
function Reddit({
  inputValue,
  setInputValue,
  handleSubmit,
  posts,
  setPosts,
  error,
  setError,
  subreddit,
}) {
  useEffect(() => {
    // Clear the error & data before fetching new data
    setError(null);
    setPosts([]);
    // Fetch posts
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw new Error("Could not fetch posts");
      })
      .then((res) => res.json())
      .then((json) =>
        // Save the posts into state
        setPosts(json.data.children.map((c) => c.data))
      )
      .catch((error) => {
        // Save the error in state
        setError(error.message);
      });
  }, [subreddit, setPosts, setError]);
  //Render as usual
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
}

export default Reddit;
