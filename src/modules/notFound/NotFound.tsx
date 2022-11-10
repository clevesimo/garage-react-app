import { useEffect } from 'react';
import './NotFound.scss';

const NotFound = () => {

  useEffect(
    () => {
      document.title = 'Page not found';
    },
    []
  );
  
  // TODO: redirect if possible to Home page

  return ( 
  <div className="app-notFound">
    Page not found !!! 
  </div> 
  );
};
 
export default NotFound;
