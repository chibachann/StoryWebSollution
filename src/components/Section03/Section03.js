import * as React from 'react';
import * as styles from './Section03.module.css';
import useIntersectionObserver from '../useIntersectionObserver';
import LeftImageRightText from '../LeftImageRightText/LeftImageRightText';


const Section03 = () => {
    const [containerRef, isContainerVisible] = useIntersectionObserver({
        threshold: 0.3,
      });

    return ( 
        <section className={`${styles.section03} ${isContainerVisible ? styles.animate : ""}`} ref={containerRef}>
            <div className={styles.GridContainer}>
                <div className={styles.SubTitle}>
                    <h2>Service</h2>
                </div>
                <div className={styles.Title}>
                    <h1>モダン・オフィシャルデザイン<br/>なんでもお任せを</h1>
                </div>
                <div className={styles.Text}>
                    <p>Story Web Solutions は<br/>
                    使いやすく分かりやすいウェブサイトとウェブサービスを制作する会社です<br/>
                    私たちの提供するサービスを簡単にご説明させていただきます
                    </p>
                </div>
            </div>
            
            <LeftImageRightText
                imageSrc="/images/design.jpg"
                imageAlt="section02-image01"
                subTitle="Design"
                titleLine1="ブランドの魅力を表現する"
                titleLine2="洗練されたデザイン"
                text="洗練された美しさと使いやすさを兼ね備えたデザインで、お客様のブランドの魅力を最大限に引き出します。ユーザーの心を掴む直感的な操作性により、滞在時間とコンバージョン率の向上を実現。"
            />
            <LeftImageRightText
                imageSrc="/images/performance.jpg"
                imageAlt="section02-image01"
                subTitle="Performance"
                titleLine1="瞬時に読み込まれる"
                titleLine2="高速パフォーマンス"
                text="瞬時に読み込まれる高速なページと、あらゆるデバイスで完璧に機能するモバイルファースト設計で、すべての顧客にシームレスな体験を提供します。ストレスフリーな閲覧体験により、ユーザーの満足度が向上し、コンバージョン率の改善にもつながります。さらに、SEO対策にも効果的で、検索エンジンでの順位向上が期待できます。"
            />
            <LeftImageRightText
                imageSrc="/images/seo.jpg"
                imageAlt="section02-image01"
                subTitle="SEO"
                titleLine1="上位表示を実現"
                titleLine2="SEO最適化"
                text="SEO最適化により検索エンジンでの上位表示を実現し、アクセスの増加をサポート。キーワード分析、コンテンツ最適化、サイト構造の改善など、包括的なアプローチで自然検索からの質の高いトラフィックを継続的に獲得します。お客様のビジネスの可視性を高め、オンライン上での競争力を強化します。"
            />
            
            
        </section>
    );
};

export default Section03;
