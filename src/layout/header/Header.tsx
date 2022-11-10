import './Header.scss';
import HeaderNavbar from './HeaderNavbar';
import HeaderPhone from './HeaderPhone';
const Header = () => {
  return ( 
  <div className="app-header">
    <HeaderPhone/>
    <HeaderNavbar/>
  </div> 
  );
};
 
export default Header;

