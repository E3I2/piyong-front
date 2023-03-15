import React from 'react';
import styles from './Table.module.css';

const Td = ({item}) => {

    return (
        <>
        <tr>
            <td className={styles.TableIDSection}>{item.id}</td>
            <td className={styles.TableSection}>{item.name}</td>
            <td className={styles.TableSection}>{item.email}</td>
            <td className={styles.TableSection}>{item.phone}</td>
        </tr>
        </>
    )
};

export default Td;