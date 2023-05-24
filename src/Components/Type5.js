import React, { useState, useEffect } from 'react';

const Type5 = ({Data}) => {
    console.log(Data)
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    // Perform backend processing with the selected file
    // Here, you can send the file to the server using APIs or perform any desired processing logic

    // Store the file in the browser's local storage
    localStorage.setItem('uploadedFile', JSON.stringify(selectedFile));

    // Confirmation message
    console.log('File stored in local storage:', selectedFile);
  };

  useEffect(() => {
    setSelectedFile(null);
  }, [Data]);

  return (
    <div className="flex items-center space-x-4">
      <input
        type="file"
        className="border border-gray-300 py-2 px-4 rounded-lg"
        onChange={handleFileChange}
      />

      <button
        className="bg-opacity-60 text-white bg-gray-600 hover:bg-black focus:ring-gray-800 dark:focus:ring-white-200 font-medium py-2 px-4 rounded-lg"
        onClick={handleFileUpload}
      >
        Upload
      </button>
    </div>
  );
};

export default Type5;
