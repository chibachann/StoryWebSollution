import * as React from 'react';
import * as styles from './Section03.module.css';
import useIntersectionObserver from '../useIntersectionObserver';



const Section03 = () => {
    const [containerRef, isContainerVisible] = useIntersectionObserver({
        threshold: 0.3,
      });

    return ( 
        <section className={`${styles.section03} ${isContainerVisible ? styles.animate : ""}`} ref={containerRef}>
            <div className={styles.ImageCardArea}>
                <div className={styles.ImageCard}>

                </div>
                <div className={styles.ImageCard}>

                </div>
                <div className={styles.ImageCard}>

                </div>
                <div className={styles.ImageCard}>

                </div>
                
                
            </div>
            <div className={styles.TextArea}>
                <div className={styles.SubTitle}>
                    <h2>Service</h2>
                </div>
                <div className={styles.Title}>
                    <h1>Webで実現する<br/>あなたのビジネスストーリー</h1>
                </div>
                <div className={styles.Text}>
                    <p>Story Web Solutions は、使いやすく分かりやすいウェブサイトとウェブサービスを制作する会社です。<br/>
                    私たちは、ウェブサイト制作、ウェブアプリケーション開発、UI/UXデザイン、コンテンツ戦略など、包括的なウェブソリューションを提供しています。最新技術とクリエイティブなアイデアを組み合わせ、お客様のビジネスニーズに合わせた効果的なウェブ体験を創造します。ユーザー中心のアプローチで、お客様のストーリーをウェブ上で魅力的に伝えるお手伝いをいたします。
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

export default Section03;
