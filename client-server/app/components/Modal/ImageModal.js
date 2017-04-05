import React from 'react';

const ImageModal = (props) => {
  const { isShown, imageUrl, closeModal } = props;

  return (
    <div className={`modal ${isShown && 'is-active'}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <p className="image">
          <img src={imageUrl ? imageUrl : 'http://bulma.io/images/placeholders/1280x960.png'} />
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
