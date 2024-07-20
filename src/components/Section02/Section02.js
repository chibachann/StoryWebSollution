import * as React from 'react';
import * as styles from './Section02.module.css';
import useIntersectionObserver from '../useIntersectionObserver';



const Section02 = () => {
    const [containerRef, isContainerVisible] = useIntersectionObserver({
        threshold: 0.3,
      });

    return ( 
        <section className={`${styles.section02} ${isContainerVisible ? styles.animate : ""}`} ref={containerRef}>
            <div className={styles.ImageArea}>

                <img src="/images/about.jpg" alt="section02-image01" />

            </div>
            <div className={styles.TextArea}>
                <div className={styles.SubTitle}>
                    <h2>About Us</h2>
                </div>
                <div className={styles.Title}>
                    <h1>ビジネスを成功に導く<br/>Webソリューション</h1>
                </div>
                <div className={styles.Text}>
                    <p>Story Web Solutionsは、使いやすく分かりやすいウェブサイトとウェブサービスを制作する会社です。
                        私たちは、ユーザーにとって魅力的で理解しやすいWebページを提供しています。
                    </p>
                </div>
            </div>
            
        </section>
    );
};

export default Section02;
