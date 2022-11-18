import React, { useEffect, useState } from "react";
import "./Reddit.css";

// Destructure the 'subreddit' from props:
function Reddit() {
  // Initialize state to hold the posts
  const [posts, setPosts] = useState([]);
  // Initialize state to hold fetch error
  const [error, setError] = useState(null);
  // Initialize state to hold the input value
  const [inputValue, setValue] = useState("javascript");
  // Initialize state to hold the current subreddit
  const [subreddit, setSubreddit] = useState(inputValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubreddit(inputValue);
  };

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
  }, [subreddit, setPosts]);
  //Render as usual
  return (
    <div>
      <div id="searchbar">
        <form onSubmit={handleSubmit}>
          <input
            id="searchInput"
            type="search"
            value={inputValue}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </div>
      <div id="posts">
        <ul>
          {error
            ? error
            : posts.map((post) => (
                <li key={post.id}>
                  <a href={post.url}>{post.title}</a>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}

export default Reddit;
