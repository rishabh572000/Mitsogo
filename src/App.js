import './app.scss';
import 'antd/dist/antd.css';
import LeftDrawer from './componant/LeftDrawer/LeftDrawer';
import Header from './componant/Hearder/Header';
import Body from './componant/Body.jsx/Body';
import store from './componant/store';
import {Provider} from 'react-redux';
import Loading from './componant/Loading/Loading';
import React, {useState} from 'react';

function App() {

  const [loadingOf, setLoadingOf]=useState(true);
  setTimeout(() => {
    setLoadingOf(false)
  }, "4000")


  return (
    <>
    {
      loadingOf?<Loading />: <Provider store={store}>
      <div className="App">
        <LeftDrawer />
        <Header />
        <Body />
      </div>
      </Provider>
    }
    

   
    </>
  );
}

export default App;
