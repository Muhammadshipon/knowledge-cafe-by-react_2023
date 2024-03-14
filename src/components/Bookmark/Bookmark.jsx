
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
  const {title} = bookmark;
  return (
    <div className='px-8, py-5 bg-white rounded-2xl mb-5'>
      <h2 className='text-2xl font-semibold px-4'>{title}</h2>
    </div>
  );
};

Bookmark.propTypes = {
 bookmark: PropTypes.object.isRequired 
};

export default Bookmark;