import React from 'react'
import FormDataContext from '../Context/FormDataContext';
import { useContext } from 'react';


const Type4 = ({Data}) => {
    const { formData, setFormData } = useContext(FormDataContext);

    console.log(Data)
    var text = Data.question_text
    text = text.split(' ')

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name,value)

        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };

  return (
    <>
    <div>
        <input type={text[1]==="Email"?"email":"number"} name={text[1]} id={text[1]} class="bg-opacity-60 text-white bg-gray-600 hover:bg-black focus:ring-gray-800 dark:focus:ring-white-200 
        hover:bg-black bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={text[1]==="Email"? "name@gmail.com": "14-45"} required={Data.required===1} onChange={handleInputChange} // Call handleInputChange when input value changes
        />
    </div>
     <p className="text-white-700 text-base text-white">

    </p>
    </>
  )
}

export default Type4