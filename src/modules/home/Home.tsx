import { memo, useEffect, useState } from 'react';
import './Home.scss';

const Home = (props: any) => {

  const [stateValue, setStateValue] = useState<number>(0);

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
