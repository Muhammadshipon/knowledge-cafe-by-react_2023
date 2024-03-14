import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';


const Bookmarks = ({bookmarks,readingTime}) => {
  return (
   <div className="md:w-1/3">
    <div className="bg-slate-300 mb-5 rounded-3xl">
      <h3 className="text-2xl text-blue-700 px-10 py-5 ">Spent time on read: {readingTime} <span>min</span></h3>
    </div>

<div className=" bg-slate-300 px-5 pb-6 rounded-3xl">
      <h2 className="text-3xl font-bold px-4 py-5">Read as Bookmarked: {bookmarks.length} </h2>
     {bookmarks.map(bookmark=><Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)}
</div>
   </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired ,
  readingTime: PropTypes.number.isRequired
 };

export default Bookmarks;