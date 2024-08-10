import React from "react";
import * as styles from "./About.module.css";

const About = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
                <div className={styles.Title}>
                    <h1>ABOUT</h1>
                    <h2>飲食店に特化したWeb制作 </h2>
                </div>
                
                <img src="/images/about/01.jpg" alt="About" className={styles.Image}/>
                <div className={styles.Text}>
                    <p>
                    合同会社SToRy Web Sollutionは、
                    <span>飲食店様の集客に特化したWEB制作・運用サービス</span>
                    をご提供しております。
                    新規のお客様獲得はもちろん、リピーター作りまで、
                    あなたのお店の課題に合わせたオーダーメイドの解決策をご提案いたします。
                    
                    
                    </p>
                    <p>
                    <span>「もっとお客様を増やしたい」</span><br/>
                    <span>「SNS運用に力を入れたいけど、やり方がわからない」</span><br/>
                    <span>「ホームページはあるけど、うまく活用できていない」</span><br/>
                    </p>
                    <p>そんなお悩みをお持ちの飲食店オーナー様、ぜひ一度ご相談ください。
                    経験豊富な専門スタッフが、
                    <span>貴店の売上アップを全力でサポート</span>いたします！
                    まずは<span>無料カウンセリング</span>からスタート。お気軽にお問い合わせください。
                    </p>
                </div>
                
            </div>
        </section>
    )
}

export default About;
