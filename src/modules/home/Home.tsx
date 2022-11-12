import { useEffect } from 'react';
import './Home.scss';

const Home = () => {

  useEffect(
    () => {
      document.title = 'Home page';
    },
    []
  );

  return (
    <div className="app-home">
      Home Page
    </div>
  );

};

export default Home;
