import React, { useState, useEffect, useContext } from 'react';
import FormDataContext from '../Context/FormDataContext';


const Type2 = ({ Data }) => {
  console.log()
  const [dropdownItems, setDropdownItems] = useState([]);

  const { formData, setFormData } = useContext(FormDataContext);


  useEffect(() => {
    setDropdownItems(Data.choices);
  }, [Data.choices]);

  const [selectedItem, setSelectedItem] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleInputChange = () => {
    const selectedId = selectedItem;
    const name = Data.question_text.split(' ')[1]
    const value = Data.choices.filter((item) => item.id === parseInt(selectedId))
    console.log(name,value)

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
      <button onClick={handleInputChange} className='bg-opacity-60 text-white bg-gray-600 hover:bg-black focus:ring-gray-800 dark:focus:ring-white-200 font-medium rounded-lg text-sm px-8 py-4 mt-4'>Submit</button>
    </div>
  );
};

export default Type2;
