import React from 'react';
import Td from './Td';
import styles from './AdminTable.module.css';



const Tr = ({info, handleRemove, handleEdit}) => {
    return (
        <tbody>
            {
                info.map(item => {
                    return (
                        <Td key={item.id} item={item} handleRemove={handleRemove} 
						handleEdit={handleEdit} />
                    )
                })
            }
        </tbody>
    );
};

export default Tr;