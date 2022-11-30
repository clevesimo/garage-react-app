import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { ENVIRONMENT_VARIABLES } from 'constant';
import img from 'assets/images/png/img-5.png';
import { sessionService } from 'services';

const ContactMap = ({ google }) => (
  <div className='mapContent'>
    <Map
      initialCenter={ENVIRONMENT_VARIABLES.address.location}
      center={ENVIRONMENT_VARIABLES.address.location}
      zoom={10.2}
      google={google}>
      <Marker
        position={ENVIRONMENT_VARIABLES.address.location}
        icon={{
          url: img,
          anchor: new google.maps.Point(32, 32),
          scaledSize: new google.maps.Size(64, 64)
        }} />
    </Map>
  </div>
);


export default GoogleApiWrapper({
  apiKey: ENVIRONMENT_VARIABLES.googleApiKey,
  language: sessionService.currentLang.get()
})(ContactMap);
