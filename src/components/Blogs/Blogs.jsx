import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import Blog from "../Blog/Blog";

const Blogs = ({handleToAddBookmark,handleToMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data => setBlogs(data))
  },[])
  return (
    <div className="md:w-2/3">
      {blogs.map(blog=><Blog key={blog.id}
       blog={blog}
       handleToAddBookmark={handleToAddBookmark}
       handleToMarkAsRead={handleToMarkAsRead}
       ></Blog>)}
    </div>
  );
};
Blogs.propTypes ={
  blogs: PropTypes.array.isRequired,
  handleToAddBookmark: PropTypes.func.isRequired,
  handleToMarkAsRead: PropTypes.func.isRequired
}
export default Blogs;