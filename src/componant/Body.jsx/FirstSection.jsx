import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { Button, Modal, Input } from 'antd';


export default function FirstSection() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  

  return (
    <>
    <div className='firstsection'>
    <h1>Overview</h1>
    <div className='button' onClick={showModal}>
      Add Fund
      <icon><MdAdd /></icon>
    </div>
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Input placeholder="Basic usage" />
      
      </Modal>
    </div>
    </>
  )
}
