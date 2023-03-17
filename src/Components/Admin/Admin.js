import React from 'react';
import styles from './Admin.module.css';
import { useState } from "react";
import Board from '../AdminTable/Board';

  

function Admin(){

    return <div>
        <div className={styles.LineSection}>
            <div className={styles.PatrolSection}>
                <div className={styles.TitleSection}></div>
                <table className={styles.Table}>      
                    <thead>
                     <tr>
                           <th><Board></Board></th>
                       </tr>
                    </thead>
                </table>
                </div>
            </div>
        </div>
};

export default Admin;