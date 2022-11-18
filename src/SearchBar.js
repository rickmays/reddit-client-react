import { useState } from "react";

const SearchBar = () => {
  // 2 pieces of state: one to hold the input value,
  // another to hold the current subreddit
  const [inputValue, setValue] = useState("javascript");
  const [subreddit, setSubreddit] = useState(inputValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubreddit(inputValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          id="searchbar"
          value={inputValue}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </>
  );
};

export default SearchBar;
