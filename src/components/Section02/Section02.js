import * as React from 'react';
import * as styles from './Section02.module.css';
import useIntersectionObserver from '../useIntersectionObserver';



const Section02 = () => {
    const [containerRef, isContainerVisible] = useIntersectionObserver({
        threshold: 0.5,
      });

    return ( 
        <section className={`${styles.section02} ${isContainerVisible ? styles.animate : ""}`} ref={containerRef}>
            <div className={styles.ImageCardArea}>
                <div className={styles.ImageCard}>

                </div>
                <div className={styles.ImageCard}>

                </div>
                
                
            </div>
            <div className={styles.TextArea}>
                <div className={styles.SubTitle}>
                    <h2>About Us</h2>
                </div>
                <div className={styles.Title}>
                    <h1>Investigate All Corners of<br/>The World With Us</h1>
                </div>
                <div className={styles.Text}>
                    <p>Story Web Solutions is a web production company that 
                        creates websites and web services that are easy to use 
                        and easy to understand. 
                        We are a web production company that 
                        creates websites and web services 
                        that are easy to use and easy to understand. 
                    </p>
                </div>
            </div>
            <div className={styles.About}>
                <div className={styles.AboutButton}>
                    <a href="/">詳しく見る</a>
                </div>
            </div>
            
        </section>
    );
};

export default Section02;
