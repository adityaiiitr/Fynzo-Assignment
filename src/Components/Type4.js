import React, { useState } from 'react';
import FormDataContext from '../Context/FormDataContext';
import { useContext } from 'react';
import validator from 'validator';

const Type4 = ({ Data }) => {
  const { formData, setFormData } = useContext(FormDataContext);
  const [inputValue, setInputValue] = useState(''); // State to store the input value

  console.log(Data);
  var text = Data.question_text;
  text = text.split(' ');

  const handleInputChange = () => {
    let isValidEmail = text[1] === 'Email'? validator.isEmail(inputValue) : true;


    if (isValidEmail) {
      if (formData.validation) delete formData.validation;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [text[1]]: inputValue,
      }));

      
    } else {
      const v = 'validation';
      const vi = Data.id;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [v]: vi,
      }));
      console.log('FormData', formData);
    }
  };

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div>
        <input
          type={text[1] === 'Email' ? 'email' : 'number'}
          name={text[1]}
          id={text[1]}
          className="bg-opacity-60 text-white bg-gray-600 hover:bg-black focus:ring-gray-800 dark:focus:ring-white-200 hover:bg-black bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder={text[1] === 'Email' ? 'name@gmail.com' : '14-45'}
          required={Data.required === 1}
          value={inputValue}
          onChange={handleInputValueChange} // Update the input value in the state
        />

        {formData.validation === Data.id && <p className='text-red-800 bg-black bg-opacity-80 rounded-lg p-1 mt-2'>Enter Correct Email!</p>}

        <button
          className="bg-opacity-60 text-white bg-gray-600 hover:bg-black focus:ring-gray-800 dark:focus:ring-white-200 font-medium rounded-lg text-sm px-8 py-4 mt-4"
          onClick={handleInputChange}
        >
          Submit
        </button>
      </div>
      <p className="text-white-700 text-base text-white"></p>
    </>
  );
};

export default Type4;
