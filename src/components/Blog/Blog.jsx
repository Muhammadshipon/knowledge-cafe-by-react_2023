import { IoBookmarksOutline } from "react-icons/io5";
import PropTypes from 'prop-types';
const Blog = ({blog,handleToAddBookmark,handleToMarkAsRead}) => {
  console.log(blog);
  const {author, author_img, cover,hashtags,posted_date,reading_time,title,id} = blog;
  return (
    <div className='mb-10 border-b-2 pb-8 border-r-2'>
      <img src={cover} alt="" className='w-full max-h-[500px]' />

<div className='flex justify-between items-center my-5'>
  <div className='flex gap-5 items-center'>
  <div className='w-16 h-10'><img src={author_img} alt="author img" className='rounded-xl' /></div>
  <div><h3 className='font-bold text-xl'>{author}</h3>
  <p>{posted_date}</p></div>
  </div>
  <div className="flex items-center gap-4 px-3"><p><span>{reading_time}</span>min read</p> 
  <button className="text-2xl text-blue-600 font-bold" onClick={()=>handleToAddBookmark(blog)}><IoBookmarksOutline/></button></div>
</div>



      <h2 className='text-3xl font-bold my-5'>{title}</h2>
      <p>{hashtags.map((hash,idx)=><span key={idx} className='mr-3'>{hash}</span>)}</p>
      <button className='text-violet-500 underline my-5'
      onClick={()=>handleToMarkAsRead(reading_time,id)}>mark as read</button>
    </div>
  );
};
Blog.propTypes ={

  blog: PropTypes.object.isRequired,
  handleToAddBookmark: PropTypes.func.isRequired,
  handleToMarkAsRead: PropTypes.func.isRequired
  
}
export default Blog;