
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks';

function App() {
 
const [bookmarks,setBookmarks] = useState([]);
const [readingTime, setReadingTime] = useState(0);

const handleToAddBookmark = blog =>{
console.log(blog);
const newBookmarks = [...bookmarks,blog];
setBookmarks(newBookmarks);
}
const handleToMarkAsRead = (time,id) =>{
  
const updateReadingTime = readingTime + time ;
setReadingTime(updateReadingTime);
const remainingBookmarks = bookmarks.filter(bookmark=>bookmark.id!==id);
setBookmarks(remainingBookmarks);
}
  return (
    <>
     <Header></Header>

    <div className='flex sm:flex-col max-w-7xl mx-auto gap-5 mt-10'>
     <Blogs
      handleToAddBookmark={handleToAddBookmark} handleToMarkAsRead={handleToMarkAsRead}></Blogs>
     <Bookmarks bookmarks={bookmarks}
     readingTime={readingTime}></Bookmarks>
    </div>
    </>
  )
}

export default App
