import { useLoaderData } from "react-router-dom";

export default function DetailBlog() {
  const post = useLoaderData()

  return (
    <>
      <div>
        <h2 className="mt-3 text-2xl font-bold capitalize">{post?.title}</h2>
        <p className="text-base mt-2">{post?.body}</p>
      </div>
    </>
  )
}
