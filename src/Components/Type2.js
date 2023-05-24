import React, { useState, useEffect } from 'react';

const Type2 = ({ Data }) => {
  const [dropdownItems, setDropdownItems] = useState([]);

  useEffect(() => {
    setDropdownItems(Data.choices);
  }, [Data.choices]);

  const [selectedItem, setSelectedItem] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div>
      <select
        className="form-select block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        value={selectedItem}
        onChange={handleDropdownChange}
      >
        <option value="">Selected option</option>
        {dropdownItems.map((item) => (
          <option key={item.id} value={item.id}>
            {item.choice_text}
          </option>
        ))}
      </select>

      {/* Button to submit selected dropdown item */}
      <button onClick={() => console.log(selectedItem)}>Submit</button>
    </div>
  );
};

export default Type2;
