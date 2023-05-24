import React, { useState, useEffect, useContext } from 'react';
import FormDataContext from '../Context/FormDataContext';

const Type5 = ({ Data }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const { formData, setFormData } = useContext(FormDataContext);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    // Perform backend processing with the selected file
    // Here, you can send the file to the server using APIs or perform any desired processing logic

    const reader = new FileReader();

    reader.onload = (event) => {
      const fileData = event.target.result;

      // Store the file data in the browser's local storage
      localStorage.setItem('uploadedFile', fileData);
      console.log(Data.question_text.split(' ')[1]);

      // Update the form data context
      setFormData((prevFormData) => ({
        ...prevFormData,
        [Data.question_text.split(' ')[1]]: selectedFile.name.split(' ').join('_'),
      }));

      // Confirmation message
      console.log('File stored in local storage:', selectedFile);
    };

    reader.readAsDataURL(selectedFile);
  };

  useEffect(() => {
    setSelectedFile(null);
  }, [Data]);

  return (
    <div className="">
      <input
        type="file"
        className="border border-gray-300 py-2 px-4 rounded-lg"
        onChange={handleFileChange}
      />

      <button
        className="mt-4 bg-opacity-60 text-white bg-gray-600 hover:bg-black focus:ring-gray-800 dark:focus:ring-white-200 font-medium py-2 px-4 rounded-lg"
        onClick={handleFileUpload}
      >
        Upload
      </button>
    </div>
  );
};

export default Type5;
