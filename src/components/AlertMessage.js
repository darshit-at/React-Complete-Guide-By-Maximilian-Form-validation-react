import React from 'react';
import Modal from './UI/Modal';

const AlertMessage = (props) => {
    const removeAlertMessage = () => {
props.onRemoveAlertMessage(false)
    }
    return (
        <Modal>
            <h2>{props.response}</h2>
            <button onClick={removeAlertMessage}>Ok</button>
        </Modal>
    )
};

export default AlertMessage;