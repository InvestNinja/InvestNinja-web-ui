import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "./assets/css/bootstrap.min.css";
import "./assets/font-awesome/4.5.0/css/font-awesome.min.css" ;
import "./assets/css/fonts.googleapis.com.css";
import "./assets/css/fonts.googleapis.com.css";
import "./assets/css/ace-skins.min.css";
import "./assets/css/ace-rtl.min.css";
import 'react-datepicker/dist/react-datepicker.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
