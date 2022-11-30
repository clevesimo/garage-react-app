import ContactSection1 from './ContactSection1';
import { useTranslation } from 'react-i18next';
import { useSetTitleDocument } from 'hooks';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';
import { memo } from 'react';
import './Contact.scss';

const Contact = () => {

  /** hoot that apply translation */
  const { t } = useTranslation();
  /** Update title of document */
  useSetTitleDocument(t('contact.title'));

  return (
    <div className='app-contact'>
      <div className='container my-5'>
        <ContactSection1 />
        <ContactForm />
      </div>
      <ContactMap />
    </div>
  );

};

export default memo(Contact);
