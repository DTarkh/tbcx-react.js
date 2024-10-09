import "./Blog.css";

const BlogItem = (props) => {
  return (
    <div className="blog-container">
      <img
        className="img"
        src={props.image}
        alt="Blog Image"
      />
      <div className="body">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <p>{props.author}</p>
        <button className="btn">Details</button>
      </div>
    </div>
  );
};

export default BlogItem;
