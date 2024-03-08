import React, {useState} from 'react';
import AddNewBill from "./Tabs/add_new_bills.js";
import Calender from './Tabs/calender';

export default function BillTracker() {

 const [activeComponent, setActiveComponent] = useState('AddNewBills');

const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className='bill-tracker'>
      <table className='bill-table'>
        <tbody>
          <tr>
            <th>Bills Paid</th>
            {/* Your data for "Bills Paid" goes here */}
          </tr>
          <tr>
            <th>Bills Left</th>
            {/* Your data for "Bills Left" goes here */}
          </tr>
          <tr>
            <th>Percent Paid</th>
            {/* Your data for "Percent Paid" goes here */}
          </tr>
        </tbody>
      </table>

      <div className='bill_tab_table'>
        <div className='tabs'>
          <div className='tab_btns'>
            <button onClick={() => handleButtonClick('AddNewBills')}>Create New Bill</button>
            <button onClick={() => handleButtonClick('Calender')}>Calender</button>
          </div>

        {activeComponent === 'AddNewBills' && <AddNewBill />}
        {activeComponent === 'Calender' && <Calender />}
        </div>
        
      </div>
    </div>
  );
}
