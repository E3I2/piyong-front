import React from 'react';
import styles from './Admin.module.css';
import AdminBoard from './AdminBoard';
import Category from '../../components/common/category/Category';

  

function Admin(){

    return <div>
            <Category category={"경고! / 관리자 페이지"} text={"관리자"} />
        <div className={styles.LineSection}>
            <div className={styles.PatrolSection}>
                <div className={styles.TitleSection}></div>
                <table className={styles.Table}>      
                    <thead>
                     <tr>
                           <th><AdminBoard></AdminBoard></th>
                       </tr>
                    </thead>
                </table>
                </div>
            </div>
        </div>
};

export default Admin;