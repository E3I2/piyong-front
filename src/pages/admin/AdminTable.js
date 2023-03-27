import React from 'react';
import styles from './AdminTable.module.css';

const AdminTable = ({item, handleRemove, handleEdit}) => {
    const onRemove = () => {
        handleRemove(item.id)
    }

    const onEdit = () => {
        handleEdit(item);
    }

    return (
        <>
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.website}</td>     
            <button className={styles.btn} onClick={onEdit}> 수정
            	</button>
            <button className={styles.btn} onClick={onRemove}> 삭제
            	</button>
        </tr>
        </>
    )
};

export default AdminTable;