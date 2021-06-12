import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('Latitude is :', position.coords.latitude);
        console.log('Longitude is :', position.coords.longitude);
      },
      (error) => {
        console.error('Error Code = ' + error.code + ' - ' + error.message);
  }
    );

    return <div>Latitude: </div>;
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

