import React, {useState} from 'react';
import logo from '../../static/assets/images/logo.png';
import Bills from './Bills/bills.js';
import Investments from './Investments/investments.js';
import Credit from './Credit/credit.js';


const App = () => {

  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
  <div className='app'>
    <div className='header'>
      <div className='header-content'>
        <img src={logo} alt="Logo" />
        <h1>Dashboard</h1>
        </div>
    </div>

    <div className='main-body'>
      <div className='nav-btns'>
        <button onClick={() => handleButtonClick('Bills')}>Bills</button>
        <button onClick={() => handleButtonClick('Investments')}>Investments</button>
        <button onClick={() => handleButtonClick('Credit')}>Credit</button>
      </div>
      <div className='activeComponents'>
        {activeComponent === 'Bills' && <Bills />}
        {activeComponent === 'Investments' && <Investments />}
        {activeComponent === 'Credit' && <Credit />}
      </div>
    </div>
  </div>
  );
}

export default App;