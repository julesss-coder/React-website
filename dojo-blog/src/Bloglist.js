// either destructure props in the argument, or just pass in props
const Bloglist = ({blogs, title, handleDelete}) => {
  // const blogs = props.blogs;
  // const title = props.title;

  return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={ blog.id }>
          <h2 className="blog-title">{blog.title}</h2>
          <p className="author">Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
        </div>
      ))}
    </div>
  );
}
 
export default Bloglist;