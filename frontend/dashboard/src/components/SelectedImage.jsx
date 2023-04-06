import React from 'react';

const SelectedImage = ({ image }) => {
  return (
    <div style={{ alignItems: 'center',  height: '50px' }}>
      <img src={URL.createObjectURL(image)} alt="Selected Image" style={{ border: '1px solid #ccc', borderRadius: '5px' }} />
    </div>
  );
};

export default SelectedImage;