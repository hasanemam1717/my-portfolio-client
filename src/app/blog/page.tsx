import BlogCard, { TBlog } from "@/components/BlogCard";

const BlogPage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  console.log(blogs);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {blogs?.data?.map((blog: TBlog, index: number) => (
        <BlogCard blog={blog} key={index}></BlogCard>
      ))}
    </div>
  );
};

export default BlogPage;
