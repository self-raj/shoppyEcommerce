import { Outlet } from 'react-router-dom';
import './App.css';

import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Footer from './Component/Footer';



function App() {
  return (
    <div>
    
    <Provider store={appStore}>
    
      <Outlet/>
      
    </Provider>
    
      
    </div>
  );
}

export default App;
