const SearchBar = ({inputValue, setInputValue, handleSubmit}) => {
  return (
    <div id="searchbar">
    <form onSubmit={handleSubmit}>
      <input
        id="searchInput"
        type="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  </div>
  );
};

export default SearchBar;
