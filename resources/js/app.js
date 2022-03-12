require('./bootstrap');

require('./components/HelloReact')

import ReactDOM from 'react-dom';

if (document.getElementById('hello-react')) {
    ReactDOM.render(<HelloReact />, document.getElementById('hello-react'));
}