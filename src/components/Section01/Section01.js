import * as React from 'react';
import * as styles from './Section01.module.css';


const Section01 = () => {
    return ( 
        <section className={styles.section01}>
            <div className={styles.title}>
                <h1>CAREATIVE<br/>DEGITAL</h1>
            </div>
            <div className={styles.companyName}>
                <h1>Story Web Solutions</h1>
            </div>
            <div className={styles.backgroundImage}>
                <picture>
                    <source srcSet='images/Top.sb.jpg' media="(max-width: 560px)" />
                    <img src='images/Top.jpg' alt='top' />
                </picture>
                
            </div>
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
            <div className={styles.scroll}/>
        </section>
    );
};

export default Section01;
