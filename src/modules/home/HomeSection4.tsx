import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const HomeSection4 = () => {

  /** hoot that apply translation */
  const { t } = useTranslation();

  return (
    <div className='container mt-5'>
      <h1 className='text-orange'>
        {t('home.section4.title')}
      </h1>
      <p dangerouslySetInnerHTML={{ __html: t(`home.section4.description`) }} />
    </div>
  );

};

export default memo(HomeSection4);
