import './app.scss';
import 'antd/dist/antd.css';
import LeftDrawer from './componant/LeftDrawer/LeftDrawer';
import Header from './componant/Hearder/Header';
import Body from './componant/Body.jsx/Body';
import store from './componant/store';
import {Provider} from 'react-redux';

// store.subscribe(()=> console.log(store.getStore()))
function App() {


  return (
    <>
    <Provider store={store}>
    <div className="App">
      <LeftDrawer />
      <Header />
      <Body />
    </div>
    </Provider>
    </>
  );
}

export default App;
