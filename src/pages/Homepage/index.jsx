import { useEffect, useState } from "react";
import Article from "../../components/Article";
import Search from "../../components/Search";
import postData from "../../posts.json";

function Homepage() {
  const [posts, setPosts] = useState(postData);
  const [totalPost, setTotalPost] = useState(0);

  const searchChange = (value) => {
    const filteredPosts = postData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setPosts(filteredPosts);
    setTotalPost(filteredPosts.length);
  };

  useEffect(() => {
    setTotalPost(postData.length);
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold mb-3">Simple Blog</h1>
      <Search searchChange={searchChange} totalPost={totalPost} />
      {posts.map((item, index) => (
        <Article
          title={item.title}
          tags={item.tags}
          date={item.date}
          key={index}
        />
      ))}
    </>
  );
}

export default Homepage;
