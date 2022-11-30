import { ENVIRONMENT_VARIABLES } from 'constant';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const ContactSection1 = () => {

  /** hoot that apply translation */
  const { t } = useTranslation();

  return (
    <div className='container d-flex flex-column'>
      <h1 className='mx-auto text-orange'>
        {t('contact.section1.title')}
      </h1>
      <h4 className='mx-auto font-weight-boldesr'>
        {t(`contact.section1.description`)}
      </h4>
      <div className='mx-auto'>
        {t('contact.from')} :
      </div>
      <div className='mx-auto font-italic'>
        07:30 - 18:30
      </div>
      <div className='mx-auto mt-3'>
        {t('contact.to')} :
      </div>
      <div className='mx-auto  font-italic'>
        09:00 - 17:00
      </div>

      <h4 className='mx-auto mt-4 font-weight-boldesr'>
        {t(`contact.title`)}
      </h4>
      <div className='mx-auto'>
        Garage Ahmeti Mécanique
      </div>
      <div className='mx-auto'>
        Ahmeti DARDAN
      </div>

      <h4 className='mx-auto mt-4 font-weight-boldesr'>
        {t(`contact.address`)}
      </h4>
      <div className='mx-auto'>
        {ENVIRONMENT_VARIABLES.address.street}
      </div>
      <div className='mx-auto'>
        {ENVIRONMENT_VARIABLES.address.postalCodeCity}
      </div>

      <h4 className='mx-auto mt-4 font-weight-boldesr'>
        {t(`contact.phone`)}
      </h4>
      <div className='mx-auto'>
        {ENVIRONMENT_VARIABLES.contact.phone}
      </div>
    </div>
  );

};

export default memo(ContactSection1);
