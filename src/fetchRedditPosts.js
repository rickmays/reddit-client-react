const fetchRedditPosts = (subreddit, setPosts, setError) => {
  // Fetch posts
  const asyncFetch = async () => {
    try {
      const response = await fetch(
        `https://www.reddit.com/r/${subreddit}.json`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      const posts = json.data.children.map(post => post.data);
      posts.sort(
        (a, b) => (a.score < b.score) - (a.score > b.score)
      );
      setPosts(posts);
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  asyncFetch();
};

export default fetchRedditPosts;
