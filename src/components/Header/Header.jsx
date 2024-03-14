
import Profile from '../../assets/images/boy1.png'
const Header = () => {
  return (
    <header className='flex justify-between items-center p-4 mx-auto border-b-2 max-w-7xl'>
       <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
       <img src={Profile} alt="" className='w-14'/>
    </header>
  );
};

export default Header;