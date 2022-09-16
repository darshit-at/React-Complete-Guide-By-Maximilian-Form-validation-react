import React from 'react';
import './modal.css'
import  ReactDOM  from 'react-dom';
const Backdrop = () => {
    return <div className='backdrop'></div>
};

const ModalOverlay = (props) => {
    console.log(props.children)
    return (
        <div className='Overlay'>
            <div>
            {props.children}
            </div>
        
        </div>
    )
}
const portalId = document.getElementById('overlay');

const Modal = (props) => {

    return (
        <React.Fragment>
        {ReactDOM.createPortal(<Backdrop /> , portalId)}
       {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , portalId)} 
    </React.Fragment>
    );
};
export default Modal;