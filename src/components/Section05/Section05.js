import * as React from 'react';
import * as styles from './Section05.module.css';
import useIntersectionObserver from '../useIntersectionObserver';

const Section05 = () => {
    const [containerRef, isContainerVisible] = useIntersectionObserver({
        threshold: 0.3,
      });

    return ( 
        <section className={`${styles.section05} ${isContainerVisible ? styles.animate : ""}`} ref={containerRef}>
            
            <div className={styles.TextArea}>
                <div className={styles.SubTitle}>
                    <h2>Reasons</h2>
                </div>
                <div className={styles.Title}>
                    <h1>ビジネスを変革する<br className={styles.none}/>デジタルの力</h1>
                </div>
                <div className={styles.Text}>
                    <p>Webは現代ビジネスの中心です。Story Web Solutionsは、ウェブの持つ無限の可能性を最大限に活用し、お客様のビジネスを次のレベルへと導きます。
                    </p>
                </div>
            </div>

            <div className={styles.ImageCardArea}>
                <div className={styles.ImageCard}>
                    <div className={styles.ImageCardImage}></div>
                    <div className={styles.ImageCardTextArea}>
                        <div className={styles.ImageCardTitle}>
                            <h2>グローバルリーチ</h2>
                        </div>
                        <div className={styles.ImageCardText}>
                            <p>ウェブサイトは24時間365日、世界中からアクセス可能です。地理的な制限を超えて、新たな顧客やビジネスチャンスを獲得できます。 
                            </p>
                            </div>
                    </div>
                </div>
                <div className={styles.ImageCard}>
                    <div className={styles.ImageCardImage}></div>
                    <div className={styles.ImageCardTextArea}>
                        <div className={styles.ImageCardTitle}>
                            <h2>コスト効率</h2>
                        </div>
                        <div className={styles.ImageCardText}>
                            <p>従来の広告手段と比べ、ウェブマーケティングは低コストで高い効果を発揮します。的確なターゲティングにより、投資対効果を最大化します。
                            </p>
                            </div>
                    </div>
                </div>
                <div className={styles.ImageCard}>
                    <div className={styles.ImageCardImage}></div>
                    <div className={styles.ImageCardTextArea}>
                        <div className={styles.ImageCardTitle}>
                            <h2>データ駆動の意思決定</h2>
                        </div>
                        <div className={styles.ImageCardText}>
                            <p>ウェブ解析ツールを活用することで、顧客行動を詳細に把握できます。これにより、データに基づいた戦略的な意思決定が可能になります。
                            </p>
                            </div>
                    </div>
                </div>
                <div className={styles.ImageCard}>
                    <div className={styles.ImageCardImage}></div>
                    <div className={styles.ImageCardTextArea}>
                        <div className={styles.ImageCardTitle}>
                            <h2>ビジネスの自動化</h2>
                        </div>
                        <div className={styles.ImageCardText}>
                            <p>ウェブアプリケーションやAIの活用により、多くのビジネスプロセスを自動化できます。これにより、効率性が向上し、人的リソースを創造的な業務に集中させることができます。
                            </p>
                            </div>
                    </div>
                </div>
                
            </div>
            
        </section>
    );
};

export default Section05;
