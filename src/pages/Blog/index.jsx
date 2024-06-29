import { Link, useLoaderData } from "react-router-dom";

export default function Blog() {
  const blogs = useLoaderData()

  return (
    <div className="mt-3">
      <div className="text-2xl font-bold">My Blogs</div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`} className="text-lg text-gray-600 capitalize">- {blog.title}</Link>
        </div>
      ))}
    </div>
  );
}
