import React from "react";
import * as styles from "./Concept.module.css";

const Concept = () => {
    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
               <div className={styles.Title}>
                    <h1>私たちについて</h1>
                    <h2>ABOUT</h2>
                </div>
                <div className={styles.Image}>
                    <img src="/images/story/About01.jpg" alt="plant" />
                </div>
                <div className={styles.Text}>
                    <h2>飲食店に特化したWebサイト</h2>
                    <p>
                    SNSが主流の今、ホームページはどのような役割を担うのでしょうか？もちろん、これまで通り集客目的もあります。しかし、SNSマーケティングが主流だからこそ、Webサイトを持つ飲食店には信頼感が生まれるのです。
                    </p>
                    <p>
                    私たちはそんな信頼に欠かせないWebページをしっかりとお客様にお届けします！お店の魅力をギュッと詰め込んだサイト作りならお任せください！
                    </p>
                </div>
                <div className={styles.Button}>
                    <a href="">詳しく見る</a>
                </div>
                <div className={styles.SubImage}>
                <picture>
                    <source srcSet="/images/story/About02.jpg" media="(min-width: 561px)" />
                    <img src="" alt="aa"/>
                </picture>
                    
                </div>
            </div>
        </section>
    );
}

export default Concept;
