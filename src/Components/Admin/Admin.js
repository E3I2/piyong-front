import React from 'react';
import styles from './Admin.module.css';


function Admin(){

    return <div>
        <div className={styles.LineSection}>
            <div className={styles.PatrolSection}>
                <div className={styles.TitleSection}>관리자 페이지</div>
            <table className={styles.Table}>      
                <thead>
                    <tr>
                        <th className={styles.TableTitleSection}>관리자 추가</th>
                        <th className={styles.TableTitleSection}>회원 관리자 지정</th>
                        <th className={styles.TableTitleSection}>일반 회원 지정</th>
                        <th className={styles.TableTitleSection}>회원 목록 조회</th>
                    </tr>
                </thead>
            </table>
            </div>
        </div>
    </div>
};

export default Admin;