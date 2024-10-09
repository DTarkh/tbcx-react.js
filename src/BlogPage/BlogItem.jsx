import './Blog.css'

const BlogItem = () => {
  return (
    <div className='blog-container'>
        <img className="img" src="https://via.assets.so/movie.png?id=1&q=95&w=360&h=360&fit=fill" alt="Blog Image" />
        <div className="body">

        <h1>Blog Title</h1>
        <p>Blog Content</p>
        <p>Posted by: John Doe</p>
        <p>Posted on: January 1, 2022</p>
        <h2>Comments</h2>
        <button className='btn'>Details</button>

        </div>
    </div>
  )
}

export default BlogItem