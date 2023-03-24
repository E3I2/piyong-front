import React, { useState } from 'react';


const Modal = ({ selectedData, handleCancel, handleEditSubmit }) => {
  const [edited, setEdited] = useState(selectedData);

  const onCancel = () => {
    handleCancel();
  }

  const onEditChange = (e) => {
    setEdited({ //문법
      ...edited,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitEdit = (e) => {
    e.preventDefault();
    handleEditSubmit(edited);
  }

  return (
    <div className="">
      <div className="">
        <div className="">
          <h3 className="">회원 정보 수정하기</h3>
          <i className="" onClick={onCancel}></i>
        </div>
        <form onSubmit={onSubmitEdit}>
          <div class="p-3">

            <div>ID: {edited.id}</div>
            <div>Name: <input type='text' name='name' 
            value={edited.name} onChange={onEditChange} /></div>
            <div>Email: <input type='text' name='email' 
            value={edited.email} onChange={onEditChange} /></div>
            <div>Phone: <input type='text' name='phone' 
            value={edited.phone} onChange={onEditChange} /></div>
            <div>Website: <input type='text' 
            name='website' value={edited.website} onChange={onEditChange} /></div>

          </div>
          <div>
            <button onClick={onCancel}>취소</button>
            <button type='submit'>수정</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;