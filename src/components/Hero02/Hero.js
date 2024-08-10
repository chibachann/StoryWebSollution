import React from "react";
import * as styles from "./Hero.module.css";

const Hero = () => {

    return (
        <section className={styles.Section}>
            <div className={styles.Grid}>
                <div className={styles.heroImage}>
                    <picture>
                        <source media="(max-width: 560px)" srcSet="/images/story/Hero01.sp.jpg" />
                        <img src="/images/story/Hero01.jpg" alt="Hero01" />
                    </picture>
                </div>
                
                <div className={styles.heroTextContainer}>
                    <h1 className={styles.heroTitle}>
                        飲食店の成功を第一に考える<br/>
                        ホームページ制作会社
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;
