import React from 'react';
import FadeInImage from '../Common/FadeInImage';

const ImageModal = (props) => {
  const { isShown, imageUrl, closeModal } = props;

  return (
    <div className={`modal ${isShown && 'is-active'}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <p className="image">
          <FadeInImage src={imageUrl} />
        </p>
      </div>
      <button className="modal-close" onClick={closeModal}></button>
    </div>
  );
};

ImageModal.propTypes = {
  isShown: React.PropTypes.bool.isRequired,
  closeModal: React.PropTypes.func.isRequired,
  imageUrl: React.PropTypes.string
};

export default ImageModal;
