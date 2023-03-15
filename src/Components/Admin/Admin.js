import React from 'react';
import styles from './Admin.module.css';
import { useState } from "react";

function Toggle({ title, content }) {
  
    const [isCheck, setCheck] = useState(false);
  
    return (
      <>
        <div
        >
          <button
            onClick={() => {
              setCheck((e) => !e);
            }}
          >
            {isCheck ? "회원관리페이지" : "작성페이지"}
          </button>
        </div>
        {isCheck && (
          1234
        )}
      </>
    );
  }
  

function Admin(){

    return <div>
        <div className={styles.LineSection}>
            <div className={styles.PatrolSection}>
                <div className={styles.TitleSection}><Toggle></Toggle></div>
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