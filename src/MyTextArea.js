import React, { useState } from 'react';

function MyTextarea({ text, onTextChange }) {
  const [isValid, setValid] = useState(false);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setValid(isValidURL(newText));
    onTextChange(newText);
  };

  function isValidURL(url) {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$|^www\.[^\s/$.?#].[^\s]*$/;
    return urlPattern.test(url);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1>Url</h1>
      <textarea
        value={text}
        onChange={handleTextChange}
        rows={1}
        cols={40}
      />
      <p style={{ backgroundColor: isValid ? 'red' : 'green' }}>
        You typed: {isValid ? 'Not Valid' : 'Valid'}
      </p>
    </div>
  );
}

export default MyTextarea;
