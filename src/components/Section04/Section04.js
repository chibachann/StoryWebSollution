import * as React from 'react';
import * as styles from './Section04.module.css';
import useIntersectionObserver from '../useIntersectionObserver';

const Section04 = () => {
    const [containerRef, isContainerVisible] = useIntersectionObserver({
        threshold: 0.3,
      });

    return ( 
        <section className={`${styles.section04} ${isContainerVisible ? styles.animate : ""}`} ref={containerRef}>
            <div className={styles.ImageCardArea}>
                <div className={styles.ImageCard}>

                </div>
                <div className={styles.ImageCard}>

                </div>
                <div className={styles.ImageCard}>

                </div>
            </div>
            <div className={styles.TextArea}>
                <div className={styles.SubTitle}>
                    <h2>Point</h2>
                </div>
                <div className={styles.Title}>
                    <h1>革新的なWebソリューション</h1>
                </div>
                <div className={styles.Text}>
                    <p>Story Web Solutionsは、ユーザー体験を重視した革新的なウェブソリューションを提供します。<br/>私たちの3つの強みが、お客様のビジネスを成功へと導きます。
                    </p>
                </div>
            </div>
            
        </section>
    );
};

export default Section04;
