import { BsTelephoneOutboundFill } from 'react-icons/bs';

const VARIABLES = {
  phoneNumber: '+4178 896 32 54'
};

const HeaderPhone = () => (
  <div className='app-headerPhone'>
    <div className='container py-2 d-flex'>
      <small className='ml-auto' onClick={() => window.open(`tel:${VARIABLES.phoneNumber}`, '_self')}>
        <BsTelephoneOutboundFill className='mr-1' /> {VARIABLES.phoneNumber}
      </small>
    </div>
  </div>
);

export default HeaderPhone;
