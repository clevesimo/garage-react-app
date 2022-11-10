import { BrowserRouter } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import './Layout.scss';
import Routes from './routes';

const Layout = () => {
  return (
    <div className="app-layout">
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
