import React, { useState, useEffect } from 'react';

const Type1 = ({Data}) => {
  const [radioItems, setRadioItems] = useState(Data.choices);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleRadioChange = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    setRadioItems(Data.choices);
  }, [Data.choices]);

  return (
    <div className="space-y-4">
      {/* Radio button items */}
      {radioItems.map((item) => (
        <div className="flex items-center" key={item.id}>
          <input
            type="radio"
            id={`radio${item.id}`}
            className="form-radio h-5 w-5 text-blue-600"
            onChange={() => handleRadioChange(item)}
            checked={selectedItem && selectedItem.id === item.id}
          />
          <label htmlFor={`radio${item.id}`} className="ml-2 text-white">
            {item.choice_text}
          </label>
        </div>
      ))}

      {/* Button to submit selected item */}
      <button className='bg-opacity-60 text-white bg-gray-600 hover:bg-black focus:ring-gray-800 dark:focus:ring-white-200 font-medium rounded-lg text-sm  px-12 py-4' onClick={() => console.log(selectedItem)}>Submit</button>
    </div>
  );
};

export default Type1;
