import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalContents from './ModalContents';
import { IoMdClose } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const ModalButton = ( { title } ) => {
    const customStyles = {
      content: {
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        border: '0',
        background: 'rgba(0,0,0,.7)',
      },
    };

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
      <div>
        <button className='flex justify-center items-center text-lg bg-white p-2 pl-5 pr-5 text-red-400 rounded-md' onClick={openModal}><BsFillTelephoneFill className='mr-2' />연락하기</button>
        <Modal
            isOpen={modalIsOpen}
            contentLabel={title}
            style={customStyles}
        >
          <div className='text-3xl text-red-400 flex w-full justify-end items-center'>
            <button onClick={ closeModal }><IoMdClose /></button>
          </div>
          <ModalContents title={title} />
        </Modal>
      </div>
    )
}
export default ModalButton