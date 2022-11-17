import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Footer from './footer';
import Header from './header';

const Layout = () => (
  <BrowserRouter>
    <Header />
    <Routes />
    <Footer />
  </BrowserRouter>
);

export default Layout;
