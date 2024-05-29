import PropTypes from "prop-types";
import "./modal.css";

export const Modal = ({ children, onClose }) => {
  return (
    <div>
      <div onClick={(e) => onClose(e)} className="modal">
      <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
