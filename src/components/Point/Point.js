import React from "react";
import * as styles from "./Point.module.css";

const Point = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
               <div className={styles.PointCard}>
                    <div className={styles.PointNumber}>
                        <h1>SERVICE</h1>
                        <h2>01</h2>
                    </div>
                    <div className={styles.PointImage}>
                        <img src="/images/story/Service01.jpg" alt="point"/>
                    </div>
                    <div className={styles.PointText}>
                        <h2>ホームページ制作</h2>
                        <p>
                        お客様の想いを心に響くオリジナルデザインで、訪れる人の目を引くホームページを制作いたします。
                        ブランドの認知度を高めたい、売上を伸ばしたい...<br/>
                        どんな目標も、お客様に寄り添いながら形にしていきます。
                        </p>
                    </div>
                </div>
                <div className={styles.PointCard}>
                    <div className={styles.PointNumber}>
                        <h1>SERVICE</h1>
                        <h2>02</h2>
                    </div>
                    <div className={styles.PointImage}>
                        <img src="/images/story/Service02.jpg" alt="Service"/>
                    </div>
                    <div className={styles.PointText}>
                        <h2>ホームページリニューアル</h2>
                        <p>
                        古くなったホームページは、お客様に古く見られてしまいます。
                        お客様の成長したブランドイメージにふさわしい、
                        魅力的なビジュアルでホームページを生まれ変わらせます。
                        </p>
                    </div>
                </div>
                <div className={styles.PointCard}>
                    <div className={styles.PointNumber}>
                        <h1>SERVICE</h1>
                        <h2>03</h2>
                    </div>
                    <div className={styles.PointImage}>
                        <img src="/images/story/Service03.jpg" alt="point"/>
                    </div>
                    <div className={styles.PointText}>
                        <h2>予約システムの導入</h2>
                        <p>
                        予約システムの導入で、お客様とスタッフの負担を軽減。こだわりのメニューや店内の雰囲気を視覚的に表現。
                        お客様のレストランの個性を活かした
                        オリジナルデザインで、集客力アップをお手伝いします。
                        </p>
                    </div>
                </div>
                <div className={styles.SubImage}>
                    <picture>
                        <source srcSet="/images/Hero01.jpg" media="(min-width: 561px)" />
                        <img src="" alt="aa"/>
                    </picture>
                    
                </div>
            </div>
        </section>
    );
}

export default Point;
