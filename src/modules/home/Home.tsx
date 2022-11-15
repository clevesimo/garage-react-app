import { useTranslation } from 'react-i18next';
import { useSetTitleDocument } from 'hooks';
import './Home.scss';

const Home = () => {

  /** hoot that apply translation */
  const { t } = useTranslation();
  /** Update title of document */
  useSetTitleDocument(t(''));

  return (
    <div className='container my-5'>
      <div className='app-home'>
        Home Page
      </div>
    </div>
  );

};

export default Home;
