import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const HomeSection1 = () => {

  /** hoot that apply translation */
  const { t } = useTranslation();

  return (
    <div className='container'>
      <h1 className='text-orange'>
        {t('home.section1.title')}
      </h1>
      <p dangerouslySetInnerHTML={{ __html: t(`home.section1.description`) }} />
    </div>
  );

};

export default memo(HomeSection1);
