import * as React from 'react';
import * as styles from './Section02.module.css';
import useIntersectionObserver from '../useIntersectionObserver';



const Section02 = () => {
    const [containerRef, isContainerVisible] = useIntersectionObserver({
        threshold: 0.3,
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
                    <h1>ストーリーを紡ぐ<br/>Webソリューション</h1>
                </div>
                <div className={styles.Text}>
                    <p>Story Web Solutionsは、使いやすく分かりやすいウェブサイトとウェブサービスを制作する会社です。私たちは、ユーザーにとって直感的で理解しやすいウェブ体験を提供することに特化しています。
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
