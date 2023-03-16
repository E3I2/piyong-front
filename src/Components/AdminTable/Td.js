import React from 'react';
import styles from './AdminTable.module.css';

const Td = ({item, handleRemove, handleEdit}) => {
    const onRemove = () => {
        handleRemove(item.id)
    }

    const onEdit = () => {
        handleEdit(item);
    }

    return (
        <>
        <tr className='"bg-white border-2 border-gray-200'>
            <td className='px-4 py-3'>{item.id}</td>
            <td className='px-4 py-3'>{item.name}</td>
            <td className='px-4 py-3'>{item.email}</td>
            <td className='px-4 py-3'>{item.phone}</td>
            <td className='px-4 py-3'>{item.website}</td>     
            <button className={styles.buttonStyle} onClick={onEdit}> 수정
            	</button>
            <button className={styles.buttonStyle} onClick={onRemove}> 삭제
            	</button>
        </tr>
        </>
    )
};

export default Td;