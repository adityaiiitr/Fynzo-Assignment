import React, { useState, useEffect,useContext } from 'react';
import FormDataContext from '../Context/FormDataContext';

const Type3 = ({Data}) => {
    console.log(Data.choices)
  const [checkboxItems, setCheckboxItems] = useState(Data.choices);
  const [selectedItems, setSelectedItems] = useState([]);

  const { formData, setFormData } = useContext(FormDataContext);


  const handleCheckboxChange = (item) => {
    const updatedItems = [...selectedItems];
    const itemIndex = updatedItems.findIndex((selectedItem) => selectedItem.id === item.id);

    if (itemIndex > -1) {
      // If the item is already selected, remove it from the selected items
      updatedItems.splice(itemIndex, 1);
    } else {
      // If the item is not selected, add it to the selected items
      updatedItems.push(item);
    }

    setSelectedItems(updatedItems);
  };

  useEffect(() => {
    setCheckboxItems(Data.choices);
  }, [Data.choices]);

  const handleInputChange = () => {
    const name = Data.question_text.split(' ')[1]
    const value = selectedItems
    // console.log(name,value)

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
setSelectedItems([])
  };

  return (
    <div className="space-y-4 mt-4">
      {/* Checkbox items */}
      {checkboxItems.map((item) => (
        <div className="flex items-center" key={item.id}>
          <input
            type="checkbox"
            id={`checkbox${item.id}`}
            className="form-checkbox h-5 w-5 text-blue-600"
            onChange={() => handleCheckboxChange(item)}
            checked={selectedItems.some((selectedItem) => selectedItem.id === item.id)}
          />
          <label htmlFor={`checkbox${item.id}`} className="ml-2 text-white">
            {item.choice_text}
          </label>
        </div>
      ))}
      
      {/* Button to submit selected items */}
      <button className='bg-opacity-60 text-white bg-gray-600 hover:bg-black focus:ring-gray-800 dark:focus:ring-white-200 font-medium rounded-lg text-sm px-16 py-4' onClick={handleInputChange}>Submit</button>
    </div>
  );
};

export default Type3;
