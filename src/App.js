import Header from "./Header";
import Reddit from "./Reddit";
import { useState } from "react";

const App = () => {
  // Initialize state to hold the posts
  const [posts, setPosts] = useState([]);
  // Initialize state to hold fetch error
  const [error, setError] = useState(null);
  // Initialize state to hold the input value
  const [inputValue, setInputValue] = useState("reactjs");
  // Initialize state to hold the current subreddit
  const [subreddit, setSubreddit] = useState(inputValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubreddit(inputValue);
  };

  return (
    <div className="container">
      <Header />
      <Reddit
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={(e) => handleSubmit(e)}
        posts={posts}
        setPosts={setPosts}
        error={error}
        setError={setError}
        subreddit={subreddit}
      />
    </div>
  );
};

export default App;
