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
        <tr className=''>
            <td className=''>{item.id}</td>
            <td className=''>{item.name}</td>
            <td className=''>{item.email}</td>
            <td className=''>{item.phone}</td>
            <td className=''>{item.website}</td>     
            <button className={styles.buttonStyle} onClick={onEdit}> 수정
            	</button>
            <button className={styles.buttonStyle} onClick={onRemove}> 삭제
            	</button>
        </tr>
        </>
    )
};

export default Td;