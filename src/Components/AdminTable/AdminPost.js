import React, { useState } from 'react';
import styles from './AdminTable.module.css';

const Post = ({ onSaveData }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveData(form)
        console.log(form);
        setForm({
            name: '',
            email: '',
            phone: '',
            website: '',
        })
    }

    return (
        <>
            <div className=''>회원 추가하기</div>
            <form className="" onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="username">Name
                        <input 
                            required placeholder='이름을 입력해주세요' type='text' name='name' 
                            value={form.name} onChange={handleChange} />
                    </label>
                    <label htmlFor="email" >Email
                        <input 
                            required placeholder='이메일 주소를 입력해주세요' type='email' name='email' 
                            value={form.email} onChange={handleChange} />
                    </label>
                </div>
                <div >
                    <label htmlFor="phone" >Phone
                        <input 
                            required placeholder='핸드폰 번호를 입력해주세요' type='text' name='phone' 
                            value={form.phone} onChange={handleChange} />
                    </label>
                    <label htmlFor="website" >Website
                        <input 
                            required placeholder='사이트 주소를 입력해주세요' type='text' name='website' 
                            value={form.website} onChange={handleChange} />
                    </label>
                </div>
                <div className='text-center'>
                    <button type='submit'>저장</button>
                </div>
            </form>
        </>
    );
};

export default Post;