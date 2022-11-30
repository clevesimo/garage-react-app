import { EMPTY, ENVIRONMENT_VARIABLES } from 'constant';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';

interface IState {
  name: string;
  email: string;
  object: string;
  message: string;
}

const ContactForm = () => {

  /** hoot that apply translation */
  const { t } = useTranslation();
  // State of component
  const [state, setState] = useState<IState>({ email: EMPTY, message: EMPTY, name: EMPTY, object: EMPTY });

  /** Handler of event 'onChangeInput */
  const handleOnChange = (e: any) => setState(l => ({ ...l, [e.target.name]: e.target.value }));

  return (
    <div className='container mt-5 d-flex flex-column'>
      <h1 className='mx-auto text-orange'>
        {t('Formulaire de contact')}
      </h1>
      <div className='mx-auto'>
        {t('Nous sommes à votre disponible pour tous renseignements ou prise de rendez-vous.')}
      </div>
      <div className='row mt-5'>
        <form className='col-12 col-md-6 offset-md-3'>
          <div className='form-group'>
            <label>
              Votre nom
            </label>
            <input
              name='name'
              value={state.name}
              onChange={handleOnChange}
              className='form-control'
              placeholder='...' />
          </div>
          <div className='form-group'>
            <label>
              Votre email
            </label>
            <input
              name='email'
              value={state.email}
              onChange={handleOnChange}
              type='email'
              className='form-control'
              placeholder='...' />
          </div>
          <div className='form-group'>
            <label>
              Object
            </label>
            <input
              name='object'
              value={state.object}
              onChange={handleOnChange}
              className='form-control'
              placeholder='...' />
          </div>
          <div className='form-group'>
            <label>
              Votre message
            </label>
            <textarea
              name='message'
              value={state.message}
              onChange={handleOnChange}
              className='form-control'
              rows={5} />
          </div>
          <button type='submit' className='btn btn-dark'>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );

};

export default memo(ContactForm);
