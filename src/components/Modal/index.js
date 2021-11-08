import React from "react";
import InputUser from '../InputUser'

export default function Modal({id = 'modal',onClose = () => {}, children}){

    const handleOutSideClick = (e) => {
        if(e.target.id === id) onClose();
    }
    return(
        <div id={id} className='modal' onClick={handleOutSideClick}>
            <div className='modal-container'>
                <button className='close' onClick={onClose}/>
                <div className='modal-container-content'>
                    {children}
                </div>
            </div>
        </div>
    )
}