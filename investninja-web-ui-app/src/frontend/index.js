import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import CarteiraBox from './component/Carteira/CarteiraBox';
import { AppContainer } from 'react-hot-loader';
import { overrideComponentTypeChecker } from 'react-toolbox';
import { Route, BrowserRouter } from 'react-router-dom';


const rootEl = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <AppContainer>      
      <BrowserRouter>
        <div>
          <Route exact path='/' component={App} />
          <Route exact path='/home' component={App} />        
          <Route exact path='/ninja' component={App} /> 
          <Route exact path='/carteira' component={CarteiraBox} />        
        </div>
      </BrowserRouter>
    </AppContainer>,
    rootEl
  );
};


if (process.env.NODE_ENV !== 'production') {
  overrideComponentTypeChecker((classType, reactElement) => (
    reactElement && (
      reactElement.type === classType
      || reactElement.type.name === classType.displayName
    )
  ));
  if (module.hot) {
    module.hot.accept('./component/App', render);
  }
}

render();
