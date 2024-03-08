import React, { useState, useEffect } from 'react';

export default function() {
  const [billName, setBillName] = useState('');
  const [bills, setBills] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    const savedBills = JSON.parse(localStorage.getItem('bills'));
    if (savedBills) {
      setBills(savedBills);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bills', JSON.stringify(bills));
  }, [bills]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (billName.trim() !== '') {
    setBills([...bills, { name: billName, isChecked: false }]);
    setBillName('');
    }
  };

  const handleCheckboxChange = (index) => {
    setBills(prevBills => {
      const updatedBills = [...prevBills];
      updatedBills[index].isChecked = !updatedBills[index].isChecked;

        return updatedBills;
    });
  }

  const handleInputChange = (event) => {
    if (event.target.value.length <= 40) {
      setBillName(event.target.value);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(bills[index].name);
  };

  const handleEditSubmit = (index, newName) => {
    setBills(prevBills => {
  const updatedBills = [...prevBills];
    updatedBills[index].name = editValue;
    return updatedBills;
  });
    setEditIndex(null); 
  };

  const handleDelete = (index) => {
    setBills(prevBills => {
  const updatedBills = [...prevBills];
    updatedBills.splice(index, 1);
    return updatedBills;
  });
  };

  return (
    <div className='add-new-bills'>
      <h1>Add New Bill</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={billName}
            onChange={handleInputChange}
            placeholder="Enter bill name..."
            maxLength={40}
          />
          <button type="submit">Submit</button>
        </form>

      <div className='list-of-bills'>
        <div className='bill-list'>
          <h1>Bill List</h1>
          <ul>
            {bills.map((bill, index) => (
              <li key={index}>
                {editIndex === index ? (
                <form onSubmit={(e) => {
                e.preventDefault();
                handleEditSubmit(index);
                }}>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                />
              <button type="submit">Submit</button>
                </form>
                ) : (
              <div className='bill-input'>
                {bill.name}
                <div className='bill-input-modifier'>
                  <div className='bill-checkbox'>
                    <input
                      type="checkbox"
                      id={`myCheckbox${index}`}
                      checked={bill.isChecked}
                      onChange={() => handleCheckboxChange(index)}
                    />
                    <label htmlFor={`myCheckbox${index}`}>Paid</label>
                  </div>
              
                  <div className='bill-input-btns'>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                  </div> 
                </div> 
              </div>
            )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
