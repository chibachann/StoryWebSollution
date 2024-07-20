import * as React from 'react';
import * as styles from './Section03.module.css';
import useIntersectionObserver from '../useIntersectionObserver';



const Section03 = () => {
    const [containerRef, isContainerVisible] = useIntersectionObserver({
        threshold: 0.3,
      });

    return ( 
        <section className={`${styles.section03} ${isContainerVisible ? styles.animate : ""}`} ref={containerRef}>
            
            <div className={styles.SubTitle}>
                <h2>Service</h2>
            </div>
            <div className={styles.Title}>
                <h1>綺麗で見やすい<br/>Webページ制作</h1>
            </div>
            <div className={styles.Text}>
                <p>Story Web Solutions は、使いやすく分かりやすいウェブサイトとウェブサービスを制作する会社です。<br/>
                私たちの提供するサービスを簡単にご説明させていただきます。
                </p>
            </div>
            
            
        </section>
    );
};

export default Section03;
