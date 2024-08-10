import React from "react";
import * as styles from "./Explain.module.css";

const Explain = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
                <div className={styles.Title}>
                    <span className={styles.bar}/>
                    <h3>Solve the problem</h3>
                    <h2>
                        <span className={styles.marker}>様々な課題解決サポートを</span>
                        <br/>
                        <span className={styles.marker}>ご用意しています</span>
                    </h2>
                </div>
                <p className={styles.Text}>
                    ホームページ制作とWebマーケティングのノウハウをもとに、
                    <span>飲食店様に特化した課題解決サポート</span>をご提供しています。
                    新規顧客の獲得からリピーターの獲得まで、お店の集客にお困りの方はお気軽にご相談ください。
                    <br/>
                    お客様の売り上げアップに貢献できる新しい価値を創造し、
                    <span>妥協をしない成果物を納品することをお約束いたします。</span>
                </p>
                <div className={styles.TextCards}>
                    <p>新しくホームページを<br/>立ち上げたい</p>
                    <p>Webサイトから新規顧客を<br/>集客したい</p>
                    <p>成果のでるSEO対策で<br/>上位表示させたい</p>
                    <p>ホームページ制作会社を<br/>乗り換えたい</p>
                </div>
            </div>
        </section>
    )
}

export default Explain;
