import * as React from 'react';
import * as styles from './Section01.module.css';


const Section01 = () => {
    return ( 
        <section className={styles.section01}>
            <div className={styles.imageArea}>
                <img src="/images/top.jpg" alt="Story Web Solutions" />
            </div>
            <div className={styles.title}>
                <h1>CAREATIVE DEGITAL</h1>
            </div>
            <div className={styles.text}>
                <h1>Story Web Solutions</h1>
                <p>Story Web Solutionsは、お客様のビジネスをWEBを通じてサポートします</p>
            </div>
            <div className={styles.buttonArea}>
                <div className={styles.contact}>
                    <div className={styles.contactButton}>
                        <a href="/">お問い合わせ</a>
                    </div>
                </div>
                <div className={styles.catalog}>
                    <div className={styles.catalogButton}>
                        <a href="/">カタログを見る</a>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Section01;
